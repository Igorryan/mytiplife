import * as S from './styles'

//Components
import Header from '../../components/Header'
import ProductDetails from '../../components/ProductDetails'
import RelatedProducts from '../../components/RelatedProducts'
import Footer from '../../components/Footer'
import HowToUse from '../../components/HowToUse'
import Carousel from '../../components/Carousel'

import Card1 from '../../components/Cards/PocketSize/Card1'
import Card2 from '../../components/Cards/PocketSize/Card2'
import Card3 from '../../components/Cards/PocketSize/Card3'
import Card4 from '../../components/Cards/PocketSize/Card4'
import Card5 from '../../components/Cards/PocketSize/Card5'
import Card6 from '../../components/Cards/PocketSize/Card6'
import Card7 from '../../components/Cards/PocketSize/Card7'
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
  title: 'Pocket Size Business',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,'
}

const PocketSizeCards = () => {
  const [name, setName] = useState('Your name')
  const [job, setJob] = useState('Your Job')
  const [color, setColor] = useState('#59C398')
  const [image, setImage] = useState('')

  return (
    <S.Wrapper>
      <Header />

      <section>
        <Carousel width={420} sliderWidth={500}>
          <Card1 image={image} color={color} name={name} job={job} />
          <Card2 color={color} name={name} job={job} />
          <Card3 image={image} color={color} name={name} job={job} />
          <Card4 image={image} color={color} name={name} job={job} />
          <Card5 image={image} color={color} name={name} job={job} />
          <Card6 color={color} name={name} job={job} />
          <Card7 color={color} name={name} job={job} />
        </Carousel>

        <ProductDetails
          product={productData}
          states={{ name, job, color, image }}
          setStates={{ setName, setJob, setColor, setImage }}
          colorsOptions={colorsData}
          unitsOptions={unitsData}
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
