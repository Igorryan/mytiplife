export default interface IProductToCart {
  id: string
  name: string
  job: string
  color: string
  image?: string
  total: number
  quantity: number
  product: {
    title: string
    description: string
  }
  currentCard: number
}
