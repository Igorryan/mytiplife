import * as S from './styles'
import { HiOutlineArrowRight } from 'react-icons/hi'

const products = [
  {
    photo: '/img/product1.png',
    title: 'Tip Jars - Establishment',
    description: `Our Tip Jars are sturdy and durable and perfect for any Restaurant, Coffee Shop, Bar, or other
    Establishments. You can personalize the Tip Jar to your brand and our QR code take your
    customers directly to your profile on MyTipLife.com.`,
    link: './SmallAcrilic'
  },
  {
    photo: '/img/product2.png',
    title: 'Tip Jars – Artists/Performers',
    description: `The Artist Tip Jar is unique for many reasons. It is strong and durable and can carry your
      performance materials and then act as a Tip Jar. You personalize it to your Brand with contact info
      making you much more professional. The QR code is place on it from your MyTipLife.com profile
      allowing your fans to go directly back to your profile for Tips, Updates, and a way to promote you to
      their friends and family.`,
    link: './BigPlastic'
  },
  {
    photo: '/img/product3.png',
    title: 'Badges and Business Cards',
    description: `The perfect way to get more tips and keep in touch with your customers is through a personally
    branded Badge or Business Card. They can scan your MyTipLife QR Code on the badges/business
    cards and go directly to your profile on MyTipLife.com to learn more about you and increase your
    tips and share your profile with others.`,
    link: './PocketSize'
  }
]

const RelatedProducts = () => {
  return (
    <S.Wrapper>
      <h1>Related Products</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam,
      </p>

      <div className="products">
        <div></div>
        {products.map(({ title, photo, description, link }, i) => (
          <S.Product className="selected" key={i}>
            <img src={photo} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link}>
                <span>View offer</span> <HiOutlineArrowRight size={14} />
              </a>
            </div>
          </S.Product>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default RelatedProducts
