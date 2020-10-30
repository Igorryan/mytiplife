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

const colorsData = [
  '#59C398',
  '#59A5E5',
  '#CF5289',
  '#FCCA4C',
  '#D55EFF',
  '#313131'
]

const unitsData = [100, 500, 1000, 1500]

const productData = {
  title: 'Big Plastic TipJar',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
}

const BigPlasticCards = () => {
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
          width={520}
          sliderWidth={665}
          cardFocusHeight={550}
          cardFocusWidth={550}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        >
          <Card1 color={color} name={name} job={job} />
          <Card2 image={image} color={color} name={name} job={job} />
          <Card3 image={image} color={color} name={name} job={job} />
          <Card4 image={image} color={color} name={name} job={job} />
        </Carousel>

        <ProductDetails
          product={productData}
          states={{ name, job, color, image, currentCard }}
          setStates={{ setName, setJob, setColor, setImage }}
          colorsOptions={colorsData}
          unitsOptions={unitsData}
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
