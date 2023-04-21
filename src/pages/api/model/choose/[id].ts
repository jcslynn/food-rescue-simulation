// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

type Data = {
  name: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const resultModel = await prisma.model.update({
      where: {
        id: Number(id),
      },
      data: {
        chosen: { set: true },
      },
    });
    // @ts-ignore
    return res.json(resultModel);
  }
  return res.status(404);
}
