// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type Data = {
  name: string
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    // const { searchString } = req.query
    const resultOrgs = await prisma.organization.findMany()  
    // @ts-ignore
    return res.json(resultOrgs)

  }
  return res.status(404)
}
