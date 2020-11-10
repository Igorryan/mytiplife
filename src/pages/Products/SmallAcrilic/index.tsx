import * as S from './styles'

//Components
import Header from 'components/Header'
import ProductDetails from 'components/ProductDetails'
import RelatedProducts from 'components/RelatedProducts'
import Footer from 'components/Footer'
import HowToUse from 'components/HowToUse'
import Carousel from 'components/Carousel'

import Card1 from 'components/Cards/SmallAcrilic/Card1'
import Card2 from 'components/Cards/SmallAcrilic/Card2'
import Card3 from 'components/Cards/SmallAcrilic/Card3'
import Card4 from 'components/Cards/SmallAcrilic/Card4'
import Card5 from 'components/Cards/SmallAcrilic/Card5'
import Card6 from 'components/Cards/SmallAcrilic/Card6'
import Card7 from 'components/Cards/SmallAcrilic/Card7'

export const Cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7]

import { useState } from 'react'

import Products from 'data/Products'

const SmallAcrilic = () => {
  const { colors, units } = Products[1]

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
          positions={[1550, 1040, 520, 0, -520, -1040, -1550]}
          sliderWidth={650}
          current={currentCard}
          setCurrent={setCurrentCard}
        >
          <Card1 image={image} color={color} name={name} job={job} />
          <Card2 image={image} color={color} name={name} job={job} />
          <Card3 image={image} color={color} name={name} job={job} />
          <Card4 image={image} color={color} name={name} job={job} />
          <Card5 image={image} color={color} name={name} job={job} />
          <Card6 image={image} color={color} name={name} job={job} />
          <Card7 image={image} color={color} name={name} job={job} />
        </Carousel>

        <ProductDetails
          product={Products[1]}
          states={{ name, job, color, image, currentCard }}
          setStates={{ setName, setJob, setColor, setImage }}
          colorsOptions={colors}
          unitsOptions={units}
        ></ProductDetails>
      </section>

      <HowToUse
        img1="/img/howtouse1acrilic.png"
        img2="/img/howtouse2acrilic.png"
        img3="/img/howtouse3acrilic.png"
      />
      <RelatedProducts />
      <Footer />
    </S.Wrapper>
  )
}

export default SmallAcrilic
