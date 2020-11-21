import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'
import QRCode from 'qrcode.react'

const Card2 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <div>
        <h2>{name}</h2>
        <p>{job}</p>
        <QRCode
          className="qrCode"
          value={
            process.env.QRCODE_LINK_DEFAULT || 'https://www.mytiplife.com/home'
          }
        />
        <img className="logoCard" src="/img/logo_v2.svg" alt="MyTipLife Logo" />
      </div>
    </div>
  </S.CardOption>
)

export default Card2
