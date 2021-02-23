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
    tags: ['Design', 'Order', 'Receive'],
    title: 'Badges and Business Cards',
    description: `The perfect way to get more tips and keep in touch with your customers is through a personally
      branded Badge or Business Card. They can scan your MyTipLife QR Code on the badges/business
      cards and go directly to your profile on MyTipLife.com to learn more about you and increase your
      tips and share your profile with others.`,
    price: 12.65,
    productImage: '/img/pocketsize.png',
    toProductPageURL: 'PocketSize',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [1, 3, 4, 5]
  },
  {
    id: 2,
    tags: ['Design', 'Order', 'Receive'],
    title: 'Tip Jars - Establishment',
    description: `Our Tip Jars are sturdy and durable and perfect for any Restaurant, Coffee Shop, Bar, or other
      Establishments. You can personalize the Tip Jar to your brand and our QR code take your
      customers directly to your profile on MyTipLife.com.`,
    price: 23.8,
    productImage: '/img/smallacrilic.png',
    toProductPageURL: 'SmallAcrilic',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 3,
    tags: ['Design', 'Order', 'Receive'],
    title: 'Tip Jars – Artists/Performers',
    description: `The Artist Tip Jar is unique for many reasons. It is strong and durable and can carry your
      performance materials and then act as a Tip Jar. You personalize it to your Brand with contact info
      making you much more professional. The QR code is place on it from your MyTipLife.com profile
      allowing your fans to go directly back to your profile for Tips, Updates, and a way to promote you to
      their friends and family.`,
    price: 31.95,
    productImage: '/img/bigplastic.png',
    toProductPageURL: 'BigPlastic',
    units: [100, 500, 1000, 1500, 1872, 1273, 1209],
    colors: ['#59C398', '#59A5E5', '#CF5289', '#FCCA4C', '#D55EFF', '#313131'],
    cardsImageRequired: [2, 3, 4]
  }
] as IProductsProps[]
