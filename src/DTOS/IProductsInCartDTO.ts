import { IProductsProps } from 'data/Products'

export default interface IProductToCart {
  id: number
  name: string
  job: string
  color: string
  image?: string
  total: number
  quantity: number
  product: IProductsProps
  currentCard: number
}
