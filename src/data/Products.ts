export interface IProductsProps {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  productImage: string
  toProductPageURL: string
  units: number[]
  colors: string[]
  cardsImageRequired: number[]
}

export default [
  {
    id: 1,
    tags: ['Customizable', 'Novelty', 'Launch'],
    title: 'Pocket Size',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 12.65,
    productImage: '/img/pocketsize.png',
    toProductPageURL: 'PocketSize',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [1, 3, 4, 5]
  },
  {
    id: 2,
    tags: ['Customizable', 'Novelty', 'Launch'],
    title: 'Small Acrilic',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 23.8,
    productImage: '/img/smallacrilic.png',
    toProductPageURL: 'SmallAcrilic',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 3,
    tags: ['Customizable', 'Novelty', 'Launch'],
    title: 'Big Plastic',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 31.95,
    productImage: '/img/bigplastic.png',
    toProductPageURL: 'BigPlastic',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [2, 3, 4]
  }
] as IProductsProps[]
