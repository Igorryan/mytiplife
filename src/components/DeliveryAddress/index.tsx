import { useCallback, useMemo, useRef, useState } from 'react'
import * as S from './styles'
import * as Yup from 'yup'
import api from 'services/api'
import compareIsEqualsJSONObject from 'utils/compareIsEqualsJSONObject'
import { useToast } from 'hooks/toast'
import { FormHandles } from '@unform/core'
import Input from 'components/InputAddress'
import getValidationErrors from 'utils/getValidationErrors'

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
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

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
    async (data: Omit<ILocationData, 'type'>) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          location: Yup.string().required('Location is required'),
          completeAddress: Yup.string().required('Address is required'),
          floor: Yup.string(),
          howToReach: Yup.string()
        })

        await schema.validate(data, {
          abortEarly: false
        })

        if (tagLocationSelected) {
          const tagLocationSelectedData: ILocationData = {
            type: tagLocationSelected,
            location: data.location,
            completeAddress: data.completeAddress,
            floor: data.floor || '',
            howToReach: data.howToReach || ''
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
        handleSetStage(2)
      } catch (err) {
        const errors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(errors)

          Object.values(errors).forEach((er) => {
            addToast({
              type: 'error',
              title: er
            })
          })
        } else {
          addToast({
            type: 'error',
            title: 'Error saving address'
          })
        }
      }
    },
    [
      tagLocationSelected,
      handleSetStage,
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

      formRef.current?.setData({
        location: addressSelected.location,
        completeAddress: addressSelected.completeAddress,
        floor: addressSelected.floor || '',
        howToReach: addressSelected.howToReach || ''
      })
    },
    [locations]
  )

  return (
    <S.Wrapper ref={formRef} onSubmit={(e) => handleSubmit(e)}>
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
        <Input name="location" type="text" />
      </div>

      <div>
        <p>Complete address*</p>
        <Input name="completeAddress" type="text" />
      </div>

      <div>
        <p>Floor (optional)</p>
        <Input name="floor" type="text" />
      </div>

      <div>
        <p>How to reach (optional)</p>
        <Input name="howToReach" type="text" />
      </div>

      <button>Continue</button>
    </S.Wrapper>
  )
}

export default DeliveryAddress
