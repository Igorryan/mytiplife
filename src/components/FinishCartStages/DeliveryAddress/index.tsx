import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as S from './styles'
import api from 'services/api'
import changeInputValue from 'utils/changeInputValue'
import compareIsEqualsJSONObject from 'utils/compareIsEqualsJSONObject'
import { useAuth } from 'hooks/auth'
import { useToast } from 'hooks/toast'
import Redirect from 'utils/Redirect'

interface IProps {
  handleSetStage(stage: number): void
}

interface ILocationData {
  type: string
  location: string
  completeAddress: string
  floor?: string
  howToReach?: string
}

const DeliveryAddress: React.FC<IProps> = ({ handleSetStage }) => {
  const [locationSelected, setLocationSelected] = useState('')
  const [locations, setLocations] = useState<ILocationData[]>([])

  const { isAuthenticated } = useAuth()
  const { addToast } = useToast()

  const inputYourLocationRef = useRef<HTMLInputElement>(null)
  const inputCompleteAddressRef = useRef<HTMLInputElement>(null)
  const inputFloorRef = useRef<HTMLInputElement>(null)
  const inputHowToReachRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isAuthenticated()) window.location.href = '/Sign'
  }, [isAuthenticated])

  useMemo(async () => {
    try {
      const token = localStorage.getItem('@MyTipLife:token')
      if (token) {
        const response = await api.get('/address', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const address: ILocationData[] = response.data.data

        if (address) {
          addToast({
            title: `You have ${address.length} saved addresses`
          })
        }

        setLocations(address)
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Unauthorized Authentication',
        description: 'Redirecting to sign'
      })

      setTimeout(() => {
        Redirect('Sign')
      }, 3000)
    }
  }, [addToast])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (!inputYourLocationRef.current?.value) {
        alert('Preencha a sua localização')
        inputYourLocationRef.current?.focus()
        return false
      }

      if (!inputCompleteAddressRef.current?.value) {
        alert('Complete o seu endereço')
        inputCompleteAddressRef.current?.focus()
        return false
      }

      if (locationSelected) {
        const locationSelectedData: ILocationData = {
          type: locationSelected,
          location: inputYourLocationRef.current.value,
          completeAddress: inputCompleteAddressRef.current.value,
          floor: inputFloorRef.current?.value || '',
          howToReach: inputHowToReachRef.current?.value || ''
        }

        const newLocations: ILocationData[] = []

        locations &&
          locations.forEach((l) => {
            if (l.type !== locationSelected) {
              newLocations.push(l)
            }
          })

        newLocations.push(locationSelectedData)

        if (!compareIsEqualsJSONObject(newLocations, locations)) {
          const token = localStorage.getItem('@MyTipLife:token')

          if (token) {
            await api.post('/address', newLocations, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          }
        }
      }

      handleSetStage(2)
    },
    [locationSelected, handleSetStage, locations]
  )

  const isTagAddressAvailable = useCallback(
    (toTagAdress: string) => {
      if (!locations) {
        return false
      }

      const tagAddress = locations.find((l) => l.type === toTagAdress)

      if (!tagAddress) {
        return false
      }

      return true
    },
    [locations]
  )

  const handleTagLocationSelected = useCallback(
    (toLocation) => {
      setLocationSelected(toLocation)

      const addressSelected = locations.find((l) => l.type === toLocation)

      if (!addressSelected) {
        changeInputValue('', inputYourLocationRef)
        changeInputValue('', inputCompleteAddressRef)
        changeInputValue('', inputFloorRef)
        changeInputValue('', inputHowToReachRef)
        return false
      }

      const { location, completeAddress, floor, howToReach } = addressSelected

      location && changeInputValue(location, inputYourLocationRef)
      completeAddress &&
        changeInputValue(completeAddress, inputCompleteAddressRef)
      floor && changeInputValue(floor, inputFloorRef)
      howToReach && changeInputValue(howToReach, inputHowToReachRef)
    },
    [locations]
  )

  return (
    <S.Wrapper onSubmit={(e) => handleSubmit(e)}>
      <h1>DeliveryAddress</h1>

      <div>
        <p>Tag this location for later</p>
        <S.LocationsWrapper>
          <S.LocationTag
            available={isTagAddressAvailable('Home')}
            selected={locationSelected === 'Home'}
            onClick={() => handleTagLocationSelected('Home')}
          >
            home
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Work')}
            selected={locationSelected === 'Work'}
            onClick={() => handleTagLocationSelected('Work')}
          >
            work
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Office')}
            selected={locationSelected === 'Office'}
            onClick={() => handleTagLocationSelected('Office')}
          >
            office
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Other')}
            selected={locationSelected === 'Other'}
            onClick={() => handleTagLocationSelected('Other')}
          >
            other
          </S.LocationTag>
        </S.LocationsWrapper>
      </div>

      <div>
        <p>Your location*</p>
        <input ref={inputYourLocationRef} type="text" />
      </div>

      <div>
        <p>Complete address*</p>
        <input ref={inputCompleteAddressRef} type="text" />
      </div>

      <div>
        <p>Floor (optional)</p>
        <input ref={inputFloorRef} type="text" />
      </div>

      <div>
        <p>How to reach (optional)</p>
        <input ref={inputHowToReachRef} type="text" />
      </div>

      <button>Continue</button>
    </S.Wrapper>
  )
}

export default DeliveryAddress
