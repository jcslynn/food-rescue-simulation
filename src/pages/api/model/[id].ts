// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

type Data = {
  name: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!id) return res.status(404);
  if (req.method === 'GET') {
    const resultModel = await prisma.model.findUnique({
      where: { id: Number(id) },
    });
    // @ts-ignore
    return res.json(resultModel);
  }
  if (req.method === 'PUT') {
    const body = JSON.parse(req.body)
    console.log(body)
    const model = await prisma.model.update({
      where: { id: Number(id)},
      data: body
    })
    // @ts-ignore
    return res.json(model);
  }
  return res.status(404);
}
