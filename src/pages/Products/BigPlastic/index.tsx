import * as S from './styles'

//Components
import Header from 'components/Header'
import ProductDetails from 'components/ProductDetails'
import RelatedProducts from 'components/RelatedProducts'
import Footer from 'components/Footer'
import HowToUse from 'components/HowToUse'
import Carousel from 'components/Carousel'

import Card1 from 'components/Cards/BigPlastic/Card1'
import Card2 from 'components/Cards/BigPlastic/Card2'
import Card3 from 'components/Cards/BigPlastic/Card3'
import Card4 from 'components/Cards/BigPlastic/Card4'
import { useState } from 'react'

import Products from 'data/Products'

export const Cards = [Card1, Card2, Card3, Card4]

const BigPlasticCards = () => {
  const { colors, units } = Products[2]

  const [name, setName] = useState('Your name')
  const [job, setJob] = useState('Your Job')
  const [color, setColor] = useState('#59C398')
  const [image, setImage] = useState('')
  const [currentCard, setCurrentCard] = useState(0)

  return (
    <S.Wrapper>
      <Header />

      <section>
        <Carousel
          current={currentCard}
          setCurrent={setCurrentCard}
          positions={[750, 260, -260, -750]}
          sliderWidth={665}
        >
          <Card1 color={color} name={name} job={job} />
          <Card2 image={image} color={color} name={name} job={job} />
          <Card3 image={image} color={color} name={name} job={job} />
          <Card4 image={image} color={color} name={name} job={job} />
        </Carousel>

        <ProductDetails
          product={Products[2]}
          states={{ name, job, color, image, currentCard }}
          setStates={{ setName, setJob, setColor, setImage }}
          colorsOptions={colors}
          unitsOptions={units}
        ></ProductDetails>
      </section>

      <HowToUse
        img1="/img/howtouse1a.png"
        img2="/img/howtouse2a.png"
        img3="/img/howtouse3a.png"
      />
      <RelatedProducts />
      <Footer />
    </S.Wrapper>
  )
}

export default BigPlasticCards
