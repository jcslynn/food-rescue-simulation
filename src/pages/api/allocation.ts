// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
type Data = {
  name: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    // const { searchString } = req.query
    const orgs = await prisma.organization.findMany();
    const orgString = orgs.reduce(
      (prev, cur) => prev + '\n' + JSON.stringify(cur),
      ''
    );
    const chosenModel = await prisma.model.findFirst({
      where: { chosen: { equals: true } },
      select: {
        travelTime: true,
        organizationSize: true,
        foodAccess: true,
        povertyRate: true,
        incomeLevel: true,
        lastDonation: true,
        donationType: true,
      },
    });

    const prompt = generatePrompt({
      orgs: orgString,
      model: JSON.stringify(chosenModel),
    });
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 0.6,
      });
      const result = JSON.parse(completion.data.choices[0].text ?? '');
      if (result) {
        const { id, score } = result;
        const resultOrg = await prisma.organization.findUnique({
          where: { id: Number(id) },
        });
        // @ts-ignore
        return res.status(200).json({ ...resultOrg, score });
      } else {
        throw new Error('No results');
      }
    } catch (error: any) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        const e = Error(error.response.data);
        // e.status = error.response.status;
        throw e;
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        const e = Error('An error occurred during your request.');
        // e.status = 500;
        throw e;
      }
    }
  }
  return res.status(404);
}

function generatePrompt({ orgs, model }: { orgs: string; model: string }) {
  return `I want to allocate food donations to one of the following organizations:${orgs}.
  My preference model across the given feature sets are:
  ${model}.
  Give me the Borda score and id of the organization I should donate to, in the format of { "id": x, "score": y}?`;
}

function parseResponse(response: string) {}
