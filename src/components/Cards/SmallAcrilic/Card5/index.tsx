import * as S from './styles'
import QRCode from 'qrcode.react'

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
    <div style={{ background: color }}>
      <p>{job}</p>
      <QRCode
        className="qrCode"
        value={
          process.env.QRCODE_LINK_DEFAULT || 'https://www.mytiplife.com/home'
        }
      />
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card5
