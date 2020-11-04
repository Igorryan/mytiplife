import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card5 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload6.svg)'
    }}
    className="card"
  >
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <p>{job}</p>
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

      <div style={{ background: color }}></div>
    </div>
  </S.CardOption>
)

export default Card5
