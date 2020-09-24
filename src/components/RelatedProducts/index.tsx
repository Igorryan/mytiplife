import * as S from './styles'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useCallback } from 'react'
import $ from 'jquery'

const products = [
  {
    photo: '/img/product1.png',
    title: 'Small Acrilic TipJar with Sticker',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    link: 'https://www.linkedin.com/in/igorryan/'
  },
  {
    photo: '/img/product2.png',
    title: 'Big Plastic Tip Jar with Sticker',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    link: 'https://www.linkedin.com/in/igorryan/'
  },
  {
    photo: '/img/product3.png',
    title: 'Pocket Size Business Card',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    link: 'https://www.linkedin.com/in/igorryan/'
  }
]

const RelatedProducts = () => {
  const handleMouseEnter = useCallback((index: number) => {
    if (index === 0) $('.productSelected').animate({ left: '0px' }, 10)
    if (index === 1) $('.productSelected').animate({ left: '340px' }, 10)
    if (index === 2) $('.productSelected').animate({ left: '680px' }, 10)
  }, [])

  return (
    <S.Wrapper>
      <h1>Related Products</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam,
      </p>

      <div className="products">
        <div className="productSelected"></div>
        {products.map(({ title, photo, description, link }, i) => (
          <S.Product onMouseEnter={() => handleMouseEnter(i)} key={i}>
            <img src={photo} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>
              <span>View offer</span> <HiOutlineArrowRight size={14} />
            </a>
          </S.Product>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default RelatedProducts
