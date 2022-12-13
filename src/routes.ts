import { Router, Request, Response } from 'express'
import { PurchaseOrderUseCase } from './application/use-cases/reports-use-cases/purchase-order-use-case'

const router = Router()

router.post('/create-purchase-order', async (req: Request, res: Response) => {
  const usecase = new PurchaseOrderUseCase()
  await usecase.handle(req.body)
  res.send()
})

export default router