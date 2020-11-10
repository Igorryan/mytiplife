import * as S from './styles'
import { motion } from 'framer-motion'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useCart, handleOpenCart } from 'hooks/cart'
import { v4 } from 'uuid'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import { IProductsProps } from 'data/Products'

interface IProps {
  colorsOptions: string[]
  unitsOptions: number[]
  product: IProductsProps
  states: {
    name: string
    job: string
    color: string
    image: string
    currentCard: number
  }
  setStates: {
    setName: (newColor: string) => void
    setJob: (newColor: string) => void
    setColor: (newColor: string) => void
    setImage: (newColor: string) => void
  }
}

const ProductDetails: React.FC<IProps> = ({
  product,
  colorsOptions,
  unitsOptions,
  setStates,
  states
}) => {
  const { addProduct } = useCart()
  const { title, description } = product
  const { name, job, color, image, currentCard } = states
  const { setName, setJob, setColor, setImage } = setStates

  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputJobRef = useRef<HTMLInputElement>(null)
  const inputSendFileRef = useRef<HTMLInputElement>(null)

  const cardPrice = 12.211
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [formCompleted, setFormCompleted] = useState(false)
  const [imageSubmited, setImageSubmited] = useState<FormData>()

  useEffect(() => {
    setTotal(quantity * cardPrice)
  }, [quantity, cardPrice])

  useEffect(() => {
    if (name !== 'Your name' && job !== 'Your Job' && total && imageSubmited)
      setFormCompleted(true)
    else setFormCompleted(false)
  }, [name, job, total, imageSubmited])

  const handleSendImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        //Salvando imagem em estado
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        setImageSubmited(data)

        //Exibindo imagem nos cards
        const file = new FileReader()
        file.onload = function (event) {
          const result = event.target?.result
          if (typeof result === 'string') setImage(result)
        }

        if (e.target.files[0]) {
          file.readAsDataURL(e.target.files[0])
        }
      }
    },
    [setImage]
  )

  const handleChangeSelectedQuantity = useCallback((quantitySelected) => {
    setQuantity(quantitySelected)
  }, [])

  const handleInsertName = useCallback(() => {
    if (inputNameRef.current) {
      if (!inputNameRef.current.value) setName('Your name')
      else setName(inputNameRef.current.value)
    }
  }, [setName])

  const handleInsertJob = useCallback(() => {
    if (inputJobRef.current) {
      if (!inputJobRef.current.value) setJob('Your Job')
      else setJob(inputJobRef.current.value)
    }
  }, [setJob])

  const handleColorSelected = useCallback(
    (colorSelected) => {
      setColor(colorSelected)
    },
    [setColor]
  )

  const handleAddProductToCart = useCallback(() => {
    const order = {
      id: v4(),
      name,
      job,
      color,
      image,
      total,
      quantity,
      product,
      currentCard: currentCard
    }

    console.log(image)

    addProduct(order)
    handleOpenCart()
  }, [
    addProduct,
    color,
    currentCard,
    image,
    job,
    name,
    product,
    quantity,
    total
  ])

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>

      <S.CustomizationsWrapper>
        <S.ColorsWrapper colorSelected={color}>
          <h3>Custom background</h3>

          <div>
            {colorsOptions.map((c, i) => (
              <S.ColorOption
                key={i}
                selected={color === c}
                onClick={() => handleColorSelected(c)}
                style={{ backgroundColor: c }}
              ></S.ColorOption>
            ))}
          </div>
        </S.ColorsWrapper>

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
          onChange={handleSendImage}
          id="pictureUploader"
          type="file"
        ></input>
        <label htmlFor="pictureUploader">
          <img
            src={image ? image : '/img/upload.svg'}
            alt="upload"
            width="30"
            className={image ? 'imageMiniature' : ''}
          />
          <h3>{image ? 'Change your picture' : 'Send your picture'}</h3>
        </label>
      </S.UploadPhoto>

      <S.UnitsWrapper>
        <ul>
          {unitsOptions.map((units, i) => {
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
          <label>
            <h2>
              <span>$</span>
              {getIntegerAndFractionalValues(total).integerPart}
              <span>
                .{getIntegerAndFractionalValues(total).fractionalPart}
              </span>
            </h2>
          </label>

          <motion.div
            whileHover={formCompleted ? { scale: 1.1 } : {}}
            whileTap={
              formCompleted
                ? {
                    scale: 0.96
                  }
                : {}
            }
            style={{
              position: 'relative',
              width: 150
            }}
          >
            <S.AddToCartButton
              disabled={!formCompleted}
              onClick={handleAddProductToCart}
            >
              Add to cart
            </S.AddToCartButton>
          </motion.div>
        </div>
      </S.UnitsWrapper>
    </S.Wrapper>
  )
}

export default ProductDetails
