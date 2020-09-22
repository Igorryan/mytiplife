import * as S from './styles'
import { motion } from 'framer-motion'

//Components
import Header from '../../components/Header'
import RelatedProducts from '../../components/RelatedProducts'
import Footer from '../../components/Footer'
import HowToUse from '../../components/HowToUse'
import Carousel from '../../components/Carousel'

import Card1 from '../../components/Cards/BigPlastic/Card1'
import Card2 from '../../components/Cards/BigPlastic/Card2'
import Card3 from '../../components/Cards/BigPlastic/Card3'
import Card4 from '../../components/Cards/BigPlastic/Card4'

import { useCallback, useEffect, useRef, useState } from 'react'

const colorsData = [
  '#59C398',
  '#59A5E5',
  '#CF5289',
  '#FCCA4C',
  '#D55EFF',
  '#313131'
]

const unitsCardsDataOptions = [100, 500, 1000]

const BigPlasticCards = () => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputJobRef = useRef<HTMLInputElement>(null)
  const inputSendFileRef = useRef<HTMLInputElement>(null)

  const cardPrice = 12
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('Your name')
  const [job, setJob] = useState('Your Job')
  const [color, setColor] = useState('#59C398')
  const [formCompleted, setFormCompleted] = useState(false)

  useEffect(() => {
    setTotal(quantity * cardPrice)
  }, [quantity, cardPrice])

  useEffect(() => {
    if (name !== 'Your name' && job !== 'Your Job' && total)
      setFormCompleted(true)
    else setFormCompleted(false)
  }, [name, job, total])

  const handleSendImage = useCallback((image) => {
    console.log(image)
  }, [])

  const handleChangeSelectedQuantity = useCallback((quantitySelected) => {
    setQuantity(quantitySelected)
  }, [])

  const handleInsertName = useCallback(() => {
    if (inputNameRef.current) {
      if (!inputNameRef.current.value) setName('Your name')
      else setName(inputNameRef.current.value)
    }
  }, [])

  const handleInsertJob = useCallback(() => {
    if (inputJobRef.current) {
      if (!inputJobRef.current.value) setJob('Your Job')
      else setJob(inputJobRef.current.value)
    }
  }, [])

  const handleColorSelected = useCallback((colorSelected) => {
    setColor(colorSelected)
  }, [])

  return (
    <S.Wrapper>
      <Header />

      <section>
        <Carousel
          width={520}
          sliderWidth={665}
          cardFocusHeight={550}
          cardFocusWidth={550}
        >
          <Card1 color={color} name={name} job={job} />
          <Card2 color={color} name={name} job={job} />
          <Card3 color={color} name={name} job={job} />
          <Card4 color={color} name={name} job={job} />
        </Carousel>

        <S.Details>
          <h1>Big Plastic Tip Jar</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>

          <S.CustomizationsWrapper>
            <S.BackgoundColorsWrapper>
              <h3>Custom background</h3>
              <S.ColorsWrapper>
                {colorsData.map((c, i) => (
                  <S.ColorOption
                    key={i}
                    onClick={() => handleColorSelected(c)}
                    selected={color === c ? true : false}
                    style={{ background: c }}
                  />
                ))}
              </S.ColorsWrapper>
            </S.BackgoundColorsWrapper>

            <S.UploadInfosWrapper>
              <div>
                <h3>Your informations</h3>
                <input
                  ref={inputNameRef}
                  placeholder="Your name"
                  onChange={handleInsertName}
                  type="text"
                />
                <input
                  ref={inputJobRef}
                  placeholder="Your job"
                  onChange={handleInsertJob}
                  type="text"
                />
              </div>
            </S.UploadInfosWrapper>
          </S.CustomizationsWrapper>

          <S.UploadPhoto>
            <input
              ref={inputSendFileRef}
              onChange={(e) => handleSendImage(e.currentTarget.files)}
              id="pictureUploader"
              type="file"
            ></input>
            <label htmlFor="pictureUploader">
              <img src="/img/upload.svg" alt="upload" width="30" />
              <h3>Send your picture</h3>
            </label>
          </S.UploadPhoto>

          <S.UnitsWrapper>
            <ul>
              {unitsCardsDataOptions.map((units, i) => {
                const idName = `id_${units}`
                return (
                  <li key={i}>
                    <input
                      onClick={() => handleChangeSelectedQuantity(units)}
                      type="radio"
                      id={idName}
                      name="quantityCard"
                      value={units}
                    />
                    <label htmlFor={idName}>{units}</label>
                  </li>
                )
              })}
            </ul>
            <div>
              <h2>
                <span>$</span>
                {total}
                <span>.0</span>
              </h2>
              <motion.div
                whileHover={formCompleted ? { scale: 1.1 } : {}}
                whileTap={
                  formCompleted
                    ? {
                        scale: 0.96
                      }
                    : {}
                }
                style={{ position: 'relative' }}
              >
                <S.AddToCartButton disabled={!formCompleted}>
                  Add to cart
                </S.AddToCartButton>
              </motion.div>
            </div>
          </S.UnitsWrapper>
        </S.Details>
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
