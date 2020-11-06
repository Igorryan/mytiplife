import * as S from './styles'

//Components
import Header from 'components/Header'
import ProductDetails from 'pages/Products/_ProductDetails'
import RelatedProducts from 'pages/Products/_RelatedProducts'
import Footer from 'components/Footer'
import HowToUse from 'pages/Products/_HowToUse'
import Carousel from 'components/Carousel'

import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import Card7 from './Card7'

export const Cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7]

import { useState } from 'react'

import Products from 'data/Products'

const PocketSizeCards = () => {
  const { colors, units } = Products[0]

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
          sliderWidth={560}
          positions={[1240, 840, 420, 0, -420, -840, -1240]}
          current={currentCard}
          setCurrent={setCurrentCard}
        >
          <Card1 image={image} color={color} name={name} job={job} />
          <Card2 color={color} name={name} job={job} />
          <Card3 image={image} color={color} name={name} job={job} />
          <Card4 image={image} color={color} name={name} job={job} />
          <Card5 image={image} color={color} name={name} job={job} />
          <Card6 color={color} name={name} job={job} />
          <Card7 color={color} name={name} job={job} />
        </Carousel>

        <ProductDetails
          product={Products[0]}
          states={{ name, job, color, image, currentCard }}
          setStates={{ setName, setJob, setColor, setImage }}
          colorsOptions={colors}
          unitsOptions={units}
        ></ProductDetails>
      </section>

      <HowToUse
        img1="/img/howtouse1.png"
        img2="/img/howtouse2.png"
        img3="/img/howtouse3.png"
      />
      <RelatedProducts />
      <Footer />
    </S.Wrapper>
  )
}

export default PocketSizeCards
