import * as S from './styles'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useCart } from 'hooks/cart'
import { v4 } from 'uuid'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import { IProductsProps } from 'data/Products'
import ScrollContainer from 'react-indiana-drag-scroll'
import imageCompression from 'browser-image-compression'
import { useToast } from 'hooks/toast'
import Button from 'components/Button'

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
  const { addProduct, openCart } = useCart()
  const { addToast } = useToast()

  const { title, description, cardsImageRequired } = product
  const { name, job, color, image, currentCard } = states
  const { setName, setJob, setColor, setImage } = setStates

  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputJobRef = useRef<HTMLInputElement>(null)
  const inputSendFileRef = useRef<HTMLInputElement>(null)
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [formCompleted, setFormCompleted] = useState(false)
  const [imageSubmited, setImageSubmited] = useState<FormData>()

  useEffect(() => {
    setTotal(quantity * product.price)
  }, [product.price, quantity])

  useEffect(() => {
    if (name !== 'Your name' && job !== 'Your Job' && total) {
      if (cardsImageRequired) {
        const imageRequitedForCurrentCard = cardsImageRequired.find(
          (c) => c - 1 === currentCard
        )

        if (imageRequitedForCurrentCard && !imageSubmited) {
          setFormCompleted(false)
          return
        }

        setFormCompleted(true)
      }
    } else {
      setFormCompleted(false)
    }
  }, [name, job, total, imageSubmited, cardsImageRequired, currentCard])

  const handleSendImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const imageFile = e.target.files[0]

        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        }

        try {
          const compressedFile = await imageCompression(imageFile, options)

          //Salvando imagem em estado
          const data = new FormData()
          data.append('avatar', compressedFile)
          setImageSubmited(data)

          //Exibindo imagem nos cards
          const file = new FileReader()
          file.onload = function (event) {
            const result = event.target?.result
            if (typeof result === 'string') setImage(result)
          }

          if (compressedFile) {
            file.readAsDataURL(compressedFile)
            console.log(file)
          }
        } catch (error) {
          addToast({
            type: 'error',
            title: 'Error loading image'
          })
        }
      }
    },
    [addToast, setImage]
  )

  const handleChangeSelectedQuantity = useCallback(
    (quantitySelected, position: number) => {
      setQuantity(quantitySelected)
      document.getElementsByClassName('unitsScrollContainer')[0].scrollTo({
        left: position * 90 - 20,
        behavior: 'smooth'
      })
    },
    []
  )

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
    (colorSelected, position: number) => {
      setColor(colorSelected)
      document.getElementsByClassName('colorScrollContainer')[0].scrollTo({
        left: position * 44 - 20,
        behavior: 'smooth'
      })
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

    addProduct(order)
    openCart()
  }, [
    addProduct,
    color,
    currentCard,
    image,
    job,
    name,
    openCart,
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

          <ScrollContainer className="colorScrollContainer">
            {colorsOptions.map((c, i) => (
              <S.ColorOption
                key={i}
                selected={color === c}
                onClick={() => handleColorSelected(c, i)}
                style={{ backgroundColor: c }}
              ></S.ColorOption>
            ))}
          </ScrollContainer>
        </S.ColorsWrapper>

        <S.UploadInfosWrapper>
          <div>
            <h3>Your informations</h3>
            <input
              ref={inputNameRef}
              placeholder="Your name"
              onChange={handleInsertName}
              type="text"
              defaultValue={name !== 'Your name' ? name : ''}
            />
            <input
              ref={inputJobRef}
              placeholder="Your job"
              onChange={handleInsertJob}
              type="text"
              defaultValue={job !== 'Your Job' ? job : ''}
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
          accept="image/*"
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
        <S.UnitScrollWrapper className="unitsScrollContainer">
          {unitsOptions.map((units, i) => {
            const idName = `id_${units}`
            return (
              <li key={i}>
                <input
                  onClick={() => handleChangeSelectedQuantity(units, i)}
                  type="radio"
                  id={idName}
                  name="quantityCard"
                  value={units}
                />
                <label htmlFor={idName}>{units}</label>
              </li>
            )
          })}
        </S.UnitScrollWrapper>
        <S.OrderPriceWrapper>
          <label>
            <h2>
              <span>$</span>
              {getIntegerAndFractionalValues(total).integerPart}
              <span>
                .{getIntegerAndFractionalValues(total).fractionalPart}
              </span>
            </h2>
          </label>

          <Button disabled={!formCompleted} onClick={handleAddProductToCart}>
            Add to cart
          </Button>
        </S.OrderPriceWrapper>
      </S.UnitsWrapper>
    </S.Wrapper>
  )
}

export default ProductDetails
