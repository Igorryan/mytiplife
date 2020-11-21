import * as S from './styles'
import QRCode from 'qrcode.react'

import { ICardProps } from 'DTOS/ICardProducts'

const Card6 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <p>{job}</p>
      <QRCode
        className="qrCode"
        value={
          process.env.QRCODE_LINK_DEFAULT || 'https://www.mytiplife.com/home'
        }
      />
    </div>
    <div className="footer"></div>
  </S.CardOption>
)

export default Card6
