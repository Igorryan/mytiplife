import * as S from './styles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useToast } from 'hooks/toast'
import { useAuth } from 'hooks/auth'
import { useCart } from 'hooks/cart'
import AddressModal from 'components/ModalAddress'
import { ILocationData } from 'components/DeliveryAddress'
import api from 'services/api'

const Addresses = () => {
  const { addToast } = useToast()
  const { isAuthenticated } = useAuth()
  const { products } = useCart()

  const [editingAddress, setEditingAddress] = useState<ILocationData | null>(
    null
  )

  const [locations, setLocations] = useState<ILocationData[]>([])

  const handleDeleteAddress = useCallback(async (address: string) => {
    alert(`Under construction: remove address action ${address}`)
  }, [])

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

  useEffect(() => {
    if (!isAuthenticated()) {
      addToast({
        type: 'error',
        title: 'You need to log in again',
        description: 'We will redirect you',
        timer: true
      })

      setTimeout(() => {
        window.location.href = '/Sign'
      }, 3500)
    }
  }, [addToast, isAuthenticated, products.length])

  const home = useMemo(() => {
    return locations.find((l) => l.type === 'Home')
  }, [locations])

  const work = useMemo(() => {
    return locations.find((l) => l.type === 'Work')
  }, [locations])

  const office = useMemo(() => {
    return locations.find((l) => l.type === 'Office')
  }, [locations])

  const other = useMemo(() => {
    return locations.find((l) => l.type === 'Other')
  }, [locations])

  return (
    <S.Wrapper>
      {editingAddress && (
        <AddressModal
          setEditingAddress={setEditingAddress}
          editingAddress={editingAddress}
          locations={locations}
          setLocations={setLocations}
        />
      )}

      <Header />
      <S.Section>
        <S.SectionHeader>
          <h1>My Account | Addresses</h1>
        </S.SectionHeader>

        <S.Addresses>
          <S.Address addressExists={!!home}>
            <header>Home</header>

            {home ? (
              <>
                <div className="addressDescription">
                  <p>{home.location}</p>

                  <p>{home.completeAddress}</p>

                  <p>{home?.floor}</p>

                  <p>{home?.howToReach}</p>
                </div>

                <div className="buttonsWrapper">
                  <button onClick={() => setEditingAddress(home)}>EDIT</button>
                  <button onClick={() => handleDeleteAddress('Home')}>
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  setEditingAddress({
                    type: 'Home'
                  } as ILocationData)
                }}
                className="notFoundAddressWrapper"
              >
                <img src="/img/mapIcon.svg" alt="" />
                <span>
                  ADD <strong>HOME</strong>
                  <br /> ADDRESS
                </span>
              </div>
            )}
          </S.Address>

          <S.Address addressExists={!!work}>
            <header>Work</header>

            {work ? (
              <>
                <div className="addressDescription">
                  <p>{work.location}</p>

                  <p>{work.completeAddress}</p>

                  <p>{work?.floor}</p>

                  <p>{work?.howToReach}</p>
                </div>

                <div className="buttonsWrapper">
                  <button onClick={() => setEditingAddress(work)}>EDIT</button>
                  <button onClick={() => handleDeleteAddress('Work')}>
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  setEditingAddress({
                    type: 'Work'
                  } as ILocationData)
                }}
                className="notFoundAddressWrapper"
              >
                <img src="/img/mapIcon.svg" alt="" />
                <span>
                  ADD <strong>WORK</strong>
                  <br /> ADDRESS
                </span>
              </div>
            )}
          </S.Address>
          <S.Address addressExists={!!office}>
            <header>Office</header>

            {office ? (
              <>
                <div className="addressDescription">
                  <p>{office.location}</p>

                  <p>{office.completeAddress}</p>

                  <p>{office?.floor}</p>

                  <p>{office?.howToReach}</p>
                </div>

                <div className="buttonsWrapper">
                  <button onClick={() => setEditingAddress(office)}>
                    EDIT
                  </button>
                  <button onClick={() => handleDeleteAddress('Office')}>
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  setEditingAddress({
                    type: 'Office'
                  } as ILocationData)
                }}
                className="notFoundAddressWrapper"
              >
                <img src="/img/mapIcon.svg" alt="" />
                <span>
                  ADD <strong>OFFICE</strong>
                  <br /> ADDRESS
                </span>
              </div>
            )}
          </S.Address>
          <S.Address addressExists={!!other}>
            <header>Other</header>

            {other ? (
              <>
                <div className="addressDescription">
                  <p>{other.location}</p>

                  <p>{other.completeAddress}</p>

                  <p>{other?.floor}</p>

                  <p>{other?.howToReach}</p>
                </div>

                <div className="buttonsWrapper">
                  <button onClick={() => setEditingAddress(other)}>EDIT</button>
                  <button onClick={() => handleDeleteAddress('Other')}>
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  setEditingAddress({
                    type: 'Other'
                  } as ILocationData)
                }}
                className="notFoundAddressWrapper"
              >
                <img src="/img/mapIcon.svg" alt="" />
                <span>
                  ADD <strong>OTHER</strong>
                  <br /> ADDRESS
                </span>
              </div>
            )}
          </S.Address>
        </S.Addresses>
      </S.Section>
      <Footer />
    </S.Wrapper>
  )
}

export default Addresses
