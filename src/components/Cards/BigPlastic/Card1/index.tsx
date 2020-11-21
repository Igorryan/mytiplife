import * as S from './styles'
import QRCode from 'qrcode.react'

import { ICardProps } from 'DTOS/ICardProducts'

const Card1 = ({ color, name, job }: ICardProps) => (
  <S.CardOption style={{ background: color }} className="card">
    <div>
      <h2>{name}</h2>
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

export default Card1
