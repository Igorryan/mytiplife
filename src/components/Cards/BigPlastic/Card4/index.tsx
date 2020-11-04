import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card4 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div
      style={{
        backgroundImage: image
          ? `url('${image}')`
          : 'url(/img/card_upload2.svg)'
      }}
      className="img"
    ></div>

    <div className="color" style={{ backgroundColor: color }}>
      <p>{job}</p>
      <h2>{name}</h2>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card4
