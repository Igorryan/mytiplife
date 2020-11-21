import * as S from './styles'
import QRCode from 'qrcode.react'

import { ICardProps } from 'DTOS/ICardProducts'

const Card7 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <img
        className="illustration"
        src="/img/illustration1.svg"
        alt="illustration of a man playing the drums"
      />
      <h2>{name}</h2>
      <p>{job}</p>
      <QRCode
        className="qrCode"
        value={
          process.env.QRCODE_LINK_DEFAULT || 'https://www.mytiplife.com/home'
        }
      />
    </div>
    <div className="footer">
      <img className="logoCard" src="/img/logo_v2.svg" alt="MyTipLife Logo" />
    </div>
  </S.CardOption>
)

export default Card7
