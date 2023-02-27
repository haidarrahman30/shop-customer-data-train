// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { customerList } from '@/modules/customers/services'
import { Customers } from '@/modules/customers/entities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customers[]>
) {
  const data = await customerList()

  res.status(200).json(data)
}
