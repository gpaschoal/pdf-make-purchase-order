import express from 'express'
import { PurchaseOrderUseCase } from './application/use-cases/reports-use-cases/purchase-order-use-case'

const router = express.Router()

router.post('/criar-pdf', async (req, res) => {
  const usecase = new PurchaseOrderUseCase()
  await usecase.handle({})
  res.send()
})

export default router