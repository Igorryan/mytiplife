import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'
import QRCode from 'qrcode.react'

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

export default Card4
