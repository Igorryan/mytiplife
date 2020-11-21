import * as S from './styles'
import QRCode from 'qrcode.react'

import { ICardProps } from 'DTOS/ICardProducts'

const Card2 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload3.svg)'
    }}
    className="card"
  >
    <div className="maskBackground" style={{ backgroundColor: color }}>
      <p>{job}</p>

      <h2>{name}</h2>
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

export default Card2
