import * as S from 'styles/Products/PocketSize/styles'

//Components
import Header from 'components/Header'
import ProductDetails from 'components/ProductDetails'
import RelatedProducts from 'components/RelatedProducts'
import Footer from 'components/Footer'
import HowToUse from 'components/HowToUse'
import Carousel from 'components/Carousel'

import Card1 from 'components/Cards/PocketSize/Card1'
import Card2 from 'components/Cards/PocketSize/Card2'
import Card3 from 'components/Cards/PocketSize/Card3'
import Card4 from 'components/Cards/PocketSize/Card4'
import Card5 from 'components/Cards/PocketSize/Card5'
import Card6 from 'components/Cards/PocketSize/Card6'
import Card7 from 'components/Cards/PocketSize/Card7'

export const Cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7]

import { useEffect, useState } from 'react'

import Products from 'data/Products'

const PocketSizeCards: React.FC = () => {
  const { colors, units } = Products[0]

  const [name, setName] = useState('Your name')
  const [job, setJob] = useState('Your Job')
  const [color, setColor] = useState('#59C398')
  const [image, setImage] = useState('')
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const yourInformationsCache = localStorage.getItem('@MyTipLife:infosCache')

    if (yourInformationsCache) {
      const { name: nameCache, job: jobCache, image: imageCache } = JSON.parse(
        yourInformationsCache
      )

      setJob(jobCache)
      setName(nameCache)
      setImage(imageCache)
    }
  }, [])

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
