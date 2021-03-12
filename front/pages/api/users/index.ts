import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import { PrismaClient} from '@prisma/client';


const prisma = new PrismaClient()

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {

    console.log(_req);
    const user = JSON.parse(_req.body)

    const users = await prisma.utilisateur.create({
      data : user
    })

    res.json(users);

    res.status(200).json(sampleUserData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

