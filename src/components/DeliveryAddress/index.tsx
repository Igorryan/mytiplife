import { useCallback, useMemo, useState } from 'react'
import * as S from './styles'
import api from 'services/api'
import compareIsEqualsJSONObject from 'utils/compareIsEqualsJSONObject'
import { useToast } from 'hooks/toast'

export interface ILocationData {
  type: string
  location: string
  completeAddress: string
  floor?: string
  howToReach?: string
}

interface IProps {
  handleSetStage(stage: number): void
  setDeliveryAddress(address: ILocationData): void
}

const DeliveryAddress: React.FC<IProps> = ({
  handleSetStage,
  setDeliveryAddress
}) => {
  const [tagLocationSelected, setTagLocationSelected] = useState('')
  const [locations, setLocations] = useState<ILocationData[]>([])

  const { addToast } = useToast()

  const [location, setLocation] = useState('')
  const [completeAddress, setCompleteAddress] = useState('')
  const [floor, setFloor] = useState('')
  const [howToReach, setHowToReach] = useState('')

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

        if (address.length !== 0) {
          addToast({
            title: `You have ${address.length} saved addresses`
          })
        }

        setLocations(address)
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Error in retrieving addresses'
      })
    }
  }, [addToast])

  const handleSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault()

        if (!location) {
          alert('Preencha a sua localização')
          return false
        }

        if (!completeAddress) {
          alert('Complete o seu endereço')
          return false
        }

        if (tagLocationSelected) {
          const tagLocationSelectedData: ILocationData = {
            type: tagLocationSelected,
            location,
            completeAddress,
            floor: floor || '',
            howToReach: howToReach || ''
          }

          const newLocations: ILocationData[] = []

          locations &&
            locations.forEach((l) => {
              if (l.type !== tagLocationSelected) {
                newLocations.push(l)
              }
            })

          newLocations.push(tagLocationSelectedData)

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
          setDeliveryAddress(tagLocationSelectedData)
        }
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error in trying to save address'
        })
      }

      handleSetStage(2)
    },
    [
      location,
      completeAddress,
      tagLocationSelected,
      handleSetStage,
      floor,
      howToReach,
      locations,
      setDeliveryAddress,
      addToast
    ]
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
      setTagLocationSelected(toLocation)

      const addressSelected = locations.find((l) => l.type === toLocation)

      if (!addressSelected) {
        return false
      }

      setLocation(addressSelected.location)
      setCompleteAddress(addressSelected.completeAddress)
      setFloor(addressSelected.floor || '')
      setHowToReach(addressSelected.howToReach || '')
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
            selected={tagLocationSelected === 'Home'}
            onClick={() => handleTagLocationSelected('Home')}
          >
            home
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Work')}
            selected={tagLocationSelected === 'Work'}
            onClick={() => handleTagLocationSelected('Work')}
          >
            work
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Office')}
            selected={tagLocationSelected === 'Office'}
            onClick={() => handleTagLocationSelected('Office')}
          >
            office
          </S.LocationTag>
          <S.LocationTag
            available={isTagAddressAvailable('Other')}
            selected={tagLocationSelected === 'Other'}
            onClick={() => handleTagLocationSelected('Other')}
          >
            other
          </S.LocationTag>
        </S.LocationsWrapper>
      </div>

      <div>
        <p>Your location*</p>
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.currentTarget.value)
          }}
          type="text"
        />
      </div>

      <div>
        <p>Complete address*</p>
        <input
          value={completeAddress}
          onChange={(e) => {
            setCompleteAddress(e.currentTarget.value)
          }}
          type="text"
        />
      </div>

      <div>
        <p>Floor (optional)</p>
        <input
          value={floor}
          onChange={(e) => {
            setFloor(e.currentTarget.value)
          }}
          type="text"
        />
      </div>

      <div>
        <p>How to reach (optional)</p>
        <input
          value={howToReach}
          onChange={(e) => {
            setHowToReach(e.currentTarget.value)
          }}
          type="text"
        />
      </div>

      <button>Continue</button>
    </S.Wrapper>
  )
}

export default DeliveryAddress
