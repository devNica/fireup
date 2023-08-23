import { Request, Response, Router } from 'express'

const testRouter = Router()

testRouter.get('/', (_req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'server is Okay!' })
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default testRouter
