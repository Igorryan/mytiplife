import * as S from 'styles/Addresses/styles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useToast } from 'hooks/toast'
import AddressModal from 'components/ModalAddress'
import { ILocationData } from 'components/DeliveryAddress'
import api from 'services/api'

const Addresses = () => {
  const { addToast } = useToast()

  const [editingAddress, setEditingAddress] = useState<
    ILocationData | undefined
  >()
  const [locations, setLocations] = useState<ILocationData[]>([])
  const [iframeAnimated, setIFrameAnimated] = useState(false)
  const [addressFocus, setAddressFocus] = useState<ILocationData>()

  const handleDeleteAddress = useCallback(async (address: string) => {
    alert(`Under construction: remove address action ${address}`)
  }, [])

  useEffect(() => {
    setIFrameAnimated(false)
    setTimeout(() => {
      setIFrameAnimated(true)
    }, 1200)
  }, [addressFocus])

  useMemo(async () => {
    try {
      const token = localStorage.getItem('@MyTipLife:token')
      if (token) {
        const response = await api.get('/address', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const addresses: ILocationData[] = response.data.data

        if (addresses.length !== 0) {
          const addr = addresses.find((addr) => !!addr)

          setTimeout(() => {
            setAddressFocus(addr)
          }, 2000)

          addToast({
            title: `You have ${addresses.length} saved addresses`
          })
        }

        setLocations(addresses)
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Error in retrieving addresses'
      })
    }
  }, [addToast])

  const fixedAddresses = useMemo(() => {
    const home = locations.find((l) => l.type === 'Home')
    const work = locations.find((l) => l.type === 'Work')
    const office = locations.find((l) => l.type === 'Office')
    const other = locations.find((l) => l.type === 'Other')

    const addresses = [
      {
        type: 'Home',
        address: home
      },
      {
        type: 'Work',
        address: work
      },
      {
        type: 'Office',
        address: office
      },
      {
        type: 'Other',
        address: other
      }
    ]

    return addresses
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
          <h1>My Addresses</h1>
        </S.SectionHeader>

        <S.Addresses>
          {fixedAddresses.map(({ type, address }) => (
            <S.Address
              key={type}
              onClick={() => setAddressFocus(address)}
              addressExists={!!address}
              addressFocus={!!addressFocus && addressFocus === address}
            >
              <header>{type}</header>

              {address ? (
                <>
                  <div className="addressDescription">
                    <p>{address.location}</p>

                    <p>{address.completeAddress}</p>

                    <p>{address?.floor}</p>

                    <p>{address?.howToReach}</p>
                  </div>

                  <div className="buttonsWrapper">
                    <button onClick={() => setEditingAddress(address)}>
                      EDIT
                    </button>
                    <button onClick={() => handleDeleteAddress(type)}>
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <div
                  onClick={() => {
                    setEditingAddress({
                      type: type
                    } as ILocationData)
                  }}
                  className="notFoundAddressWrapper"
                >
                  <img src="/img/mapIcon.svg" alt="" />
                  <span>
                    ADD <strong>{type}</strong>
                    <br /> ADDRESS
                  </span>
                </div>
              )}
            </S.Address>
          ))}
        </S.Addresses>
      </S.Section>
      {addressFocus && (
        <S.IFrame
          src={`https://www.google.com/maps?q=[${addressFocus.location} ${addressFocus.completeAddress}]&output=embed`}
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          aria-hidden="false"
          animated={iframeAnimated}
        ></S.IFrame>
      )}
      <Footer />
    </S.Wrapper>
  )
}

export default Addresses
