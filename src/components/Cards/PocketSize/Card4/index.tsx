import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'
import QRCode from 'components/QRCode'

const Card4 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url(${image})` : 'url(/img/card_upload7.svg)'
    }}
    className="card"
  >
    <div className="content">
      <div className="qrWrapper" style={{ backgroundColor: color }}>
        <QRCode />
      </div>

      <div className="infosWrapper">
        <h2>{name}</h2>
        <p>{job}</p>

        <img
          crossOrigin="anonymous"
          className="logoCard"
          src="/img/logo_v2_white.svg"
          alt="MyTipLife Logo"
        />
      </div>
    </div>
  </S.CardOption>
)

export default Card4
