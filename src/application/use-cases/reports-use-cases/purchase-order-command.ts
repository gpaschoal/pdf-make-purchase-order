import { CommandInterface } from '../command-interface'

type Address = {
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  country: string
  is_principal: boolean
}

type Customer = {
  id: string
  name: string
  document_number: string
  addresses: Address[]
}

type Product = {
  id: string
  name: string
  quantity: number
}

type PurchaseOrderCommand = CommandInterface & {
  order_purchase_id: number
  customer: Customer
  products: Product[]
}

export { PurchaseOrderCommand }
