import { ICardProps } from 'DTOS/ICardProducts'
import * as S from './styles'

const Card1 = ({ image, color, name, job }: ICardProps) => {
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
