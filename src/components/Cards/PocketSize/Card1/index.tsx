import { useEffect } from 'react'
import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
  image: string
}

const Card1 = ({ image, color, name, job }: IProps) => {
  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <S.CardOption className="card">
      <div className="content" style={{ backgroundColor: color }}>
        <div className="imageUploadedWrapper">
          <div className="imageUploaded">
            <img src={image ? image : '/img/card_upload.svg'} alt="" />
          </div>
        </div>
        <h2>{name}</h2>
        <p>{job}</p>
        <img
          className="qrCode"
          src="/img/qrcode_example.png"
          alt="QR Code Example"
        />
        <img className="logoCard" src="/img/logo_v2.svg" alt="MyTipLife Logo" />
      </div>
    </S.CardOption>
  )
}

export default Card1
