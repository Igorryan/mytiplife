import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card4 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url(${image})` : 'url(/img/card_upload7.svg)'
    }}
    className="card"
  >
    <div className="content">
      <div className="qrWrapper" style={{ backgroundColor: color }}>
        <img
          className="qrCode"
          src="/img/qrcode_example.png"
          alt="QR Code Example"
        />
      </div>

      <div className="infosWrapper">
        <h2>{name}</h2>
        <p>{job}</p>

        <img
          className="logoCard"
          src="/img/logo_v2_white.svg"
          alt="MyTipLife Logo"
        />
      </div>
    </div>
  </S.CardOption>
)

export default Card4
