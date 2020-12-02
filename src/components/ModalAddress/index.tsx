import * as S from './styles'
import Input from 'components/InputAddress'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { useCallback, useRef } from 'react'
import { ILocationData } from 'components/DeliveryAddress'
import getValidationErrors from 'utils/getValidationErrors'
import { useToast } from 'hooks/toast'
import Button from 'components/Button'
import compareIsEqualsJSONObject from 'utils/compareIsEqualsJSONObject'
import api from 'services/api'

interface AddressProps {
  editingAddress: ILocationData
  setEditingAddress(value: ILocationData | undefined): void
  locations: ILocationData[]
  setLocations(value: ILocationData[]): void
}

const ModalAddress: React.FC<AddressProps> = ({
  setEditingAddress,
  setLocations,
  editingAddress,
  locations
}) => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()

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

        const tagLocationSelectedData: ILocationData = {
          type: editingAddress.type,
          location: data.location,
          completeAddress: data.completeAddress,
          floor: data.floor || '',
          howToReach: data.howToReach || ''
        }

        const newLocations: ILocationData[] = []

        locations &&
          locations.forEach((l) => {
            if (l.type !== editingAddress.type) {
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

        setLocations(newLocations)
        setEditingAddress(undefined)
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
    [addToast, editingAddress.type, locations, setEditingAddress, setLocations]
  )

  return (
    <S.Wrapper>
      <S.FormAddress
        show={editingAddress}
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <header>{editingAddress.type}</header>
        <div>
          <p>Your location*</p>
          <Input
            name="location"
            defaultValue={editingAddress?.location}
            type="text"
          />
        </div>

        <div>
          <p>Complete address*</p>
          <Input
            name="completeAddress"
            defaultValue={editingAddress?.completeAddress}
            type="text"
          />
        </div>

        <div>
          <p>Floor (optional)</p>
          <Input
            name="floor"
            defaultValue={editingAddress?.floor}
            type="text"
          />
        </div>

        <div>
          <p>How to reach (optional)</p>
          <Input
            name="howToReach"
            defaultValue={editingAddress?.howToReach}
            type="text"
          />
        </div>

        <div className="buttonsWrapper">
          <S.ButtonCancel onClick={() => setEditingAddress(undefined)}>
            Cancel
          </S.ButtonCancel>
          <Button type="submit">Save</Button>
        </div>
      </S.FormAddress>
    </S.Wrapper>
  )
}

export default ModalAddress
