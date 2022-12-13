import express from 'express'
const router = express.Router()

router.post('/itens', (req, res) => {
  res.send('Cria novo item')
})

export default router