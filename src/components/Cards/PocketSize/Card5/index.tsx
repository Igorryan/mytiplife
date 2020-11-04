import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card5 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url(${image})` : 'url(/img/card_upload7.svg)'
    }}
    className="card"
  >
    <div className="background" style={{ backgroundColor: color }}></div>
    <div className="logoWrapper">
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>

    <div className="infoWrapper">
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />

      <div className="infos">
        <h2>{name}</h2>
        <p>{job}</p>
      </div>
    </div>
  </S.CardOption>
)

export default Card5
