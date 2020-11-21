import * as S from './styles'
import QRCode from 'qrcode.react'
import { ICardProps } from 'DTOS/ICardProducts'

const Card3 = ({ image, color, name, job, ...rest }: ICardProps) => (
  <S.CardOption className="card" {...rest}>
    <div
      style={{
        backgroundImage: image
          ? `url('${image}')`
          : 'url(/img/card_upload4.svg)'
      }}
      className="img"
    >
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>

    <div className="color" style={{ backgroundColor: color }}>
      <QRCode
        className="qrCode"
        value={
          process.env.QRCODE_LINK_DEFAULT || 'https://www.mytiplife.com/home'
        }
      />
      <p>{job}</p>
      <h2>{name}</h2>
    </div>
  </S.CardOption>
)

export default Card3
