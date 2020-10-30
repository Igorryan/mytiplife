import * as S from './styles'
import { useCart } from 'hooks/cart'
import getFractionalNumber from 'utils/getFractionalNumber'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { useCallback, useEffect, useState } from 'react'
import CreditCardType from 'credit-card-type'
import api from 'services/api'
import compareIsEqualsJSONObject from 'utils/compareIsEqualsJSONObject'
import InputMask from 'react-input-mask'
import { useAuth } from 'hooks/auth'
import { useToast } from 'hooks/toast'

interface IProps {
  handleSetStage(stage: number): void
}

interface ICreditCard {
  name: string
  expiration_date: string
  number: string
}

const PaymentDetails: React.FC<IProps> = ({ handleSetStage }) => {
  const { isAuthenticated } = useAuth()
  const { addToast } = useToast()

  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardValidUntil, setCardValidUntil] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [checkboxSaveCreditCard, setCheckboxSaveCreditCard] = useState(false)
  const [creditCardSavedByUser, setCreditCardSavedByUser] = useState<
    ICreditCard
  >({} as ICreditCard)

  const [creditCardFlag, setCreditCardFlag] = useState('none')
  const { products, removeProduct, totalCartValue } = useCart()

  const recoveryCreditCard = useCallback(async () => {
    try {
      const token = localStorage.getItem('@MyTipLife:token')

      if (token) {
        const response = await api.get('/credit-card', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const creditcard: ICreditCard = response.data.data

        if (creditcard) {
          const { name, number, expiration_date } = creditcard

          if (name && number && expiration_date) {
            setCardName(name)
            setCardNumber(number)
            setCardValidUntil(expiration_date)

            addToast({
              type: 'success',
              title: 'Recovered credit card'
            })
          }

          setCreditCardSavedByUser(creditcard)
        }
      }
    } catch (err) {
      alert('erro ao recuperar cartao de credito')
    }
  }, [addToast])

  const validations = useCallback(() => {
    if (!cardName) {
      alert('Preencha o card holder')
      return false
    }

    if (!cardNumber) {
      alert('Preencha o card number')
      return false
    }

    if (!cardValidUntil) {
      alert('Preencha a valid until')
      return false
    }

    if (!cardCVV) {
      alert('Informe o CVV')
      return false
    }

    return true
  }, [cardName, cardNumber, cardValidUntil, cardCVV])

  const saveCreditCard = useCallback(async (creditCard: ICreditCard) => {
    const token = localStorage.getItem('@MyTipLife:token')

    if (token) {
      await api.post('/credit-card', creditCard, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) window.location.href = '/Sign'
    else {
      recoveryCreditCard()
    }
  }, [isAuthenticated, recoveryCreditCard])

  useEffect(() => {
    const creditCardType = CreditCardType(cardNumber)

    const flag = creditCardType.length === 1 ? creditCardType[0].type : false

    if (!flag && creditCardFlag !== 'none') {
      setCreditCardFlag('none')
    }

    if (flag && flag !== creditCardFlag) {
      setCreditCardFlag(flag)
    }
  }, [cardNumber, creditCardFlag])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (!validations()) {
        return false
      }

      const creditCard: ICreditCard = {
        name: cardName,
        expiration_date: cardValidUntil,
        number: cardNumber
      }

      if (
        checkboxSaveCreditCard &&
        !compareIsEqualsJSONObject(creditCard, creditCardSavedByUser)
      ) {
        await saveCreditCard(creditCard)
      }

      handleSetStage(3)
    },
    [
      cardName,
      cardValidUntil,
      cardNumber,
      checkboxSaveCreditCard,
      creditCardSavedByUser,
      validations,
      handleSetStage,
      saveCreditCard
    ]
  )

  const handleSetName = useCallback((e) => {
    const value: string = e.target.value.replace(
      /[^a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/g,
      ''
    )

    setCardName(value)
  }, [])

  const handleSetCVV = useCallback((e) => {
    const value: string = e.target.value.replace(/[^0-9]+/g, '')

    setCardCVV(value)
  }, [])

  return (
    <S.Wrapper onSubmit={(e) => handleSubmit(e)}>
      <S.ProductsWrapper className="customScrollBar">
        <ul>
          {products &&
            products.map(({ id, product, total, quantity }, i) => (
              <li key={i}>
                <img src="/img/example_productCardImage.png" alt="" />
                <div className="description">
                  <header>
                    <h1>{product.title}</h1>
                    <strong>
                      {quantity}
                      <span>UN</span>
                    </strong>
                  </header>
                  <p>{product.description}</p>
                  <div>
                    <strong>
                      <span>$</span>
                      {Math.trunc(total)}
                      <span>.{getFractionalNumber(total)}</span>
                    </strong>
                    <button onClick={() => removeProduct(id)}>
                      TO REMOVE
                      <AiFillCloseCircle
                        size={26}
                        style={{
                          marginLeft: 5
                        }}
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </S.ProductsWrapper>
      <S.PaymentDetails>
        <h1>Payment Details</h1>

        <div>
          <p>Cardholder name</p>
          <input
            value={cardName}
            onChange={(e) => handleSetName(e)}
            type="text"
          />
        </div>

        <div>
          <p>Card number</p>
          <InputMask
            mask="9999 9999 9999 9999"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.currentTarget.value)}
            type="text"
          />
          <img
            width="50"
            height="32"
            src={`/img/credit_cards/${creditCardFlag}.png`}
            alt=""
          />
        </div>

        <div className="inputGroup">
          <div>
            <p>Valid Until</p>
            <InputMask
              mask="99/9999"
              value={cardValidUntil}
              onChange={(e) => setCardValidUntil(e.currentTarget.value)}
              type="text"
            />
          </div>

          <div>
            <p>CVV</p>
            <input
              value={cardCVV}
              onChange={(e) => handleSetCVV(e)}
              type="text"
            />
          </div>
        </div>

        <S.RememberMyCardWrapper>
          <input
            onChange={(e) => setCheckboxSaveCreditCard(e.currentTarget.checked)}
            type="checkbox"
            id="rememberMyCardDetails"
          />
          <label htmlFor="rememberMyCardDetails">
            Remember my card details
          </label>
        </S.RememberMyCardWrapper>

        <div className="links">
          <a onClick={() => handleSetStage(1)}>
            <FiArrowLeft size={22} color="#11cea2" />
          </a>

          <button>
            PAY <strong>${totalCartValue.toFixed(2)}</strong>
          </button>
        </div>
      </S.PaymentDetails>
    </S.Wrapper>
  )
}

export default PaymentDetails
