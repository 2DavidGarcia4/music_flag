import { dbConnect } from '../../../utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

dbConnect()

export default function pcem(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Hello PCEM' })
}