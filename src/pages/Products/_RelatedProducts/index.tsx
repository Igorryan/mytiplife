import * as S from './styles'
import { HiOutlineArrowRight } from 'react-icons/hi'

const products = [
  {
    photo: '/img/product1.png',
    title: 'Small Acrilic TipJar with Sticker',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    link: './SmallAcrilic'
  },
  {
    photo: '/img/product2.png',
    title: 'Big Plastic Tip Jar with Sticker',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    link: './BigPlastic'
  },
  {
    photo: '/img/product3.png',
    title: 'Pocket Size Business Card',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
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
