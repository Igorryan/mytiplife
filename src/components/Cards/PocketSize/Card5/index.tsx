import * as S from './styles'
import QRCode from 'components/QRCode'

import { ICardProps } from 'DTOS/ICardProducts'

const Card5 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url(${image})` : 'url(/img/card_upload7.svg)'
    }}
    className="card"
  >
    <div className="background" style={{ backgroundColor: color }}></div>
    <div className="logoWrapper">
      <img
        crossOrigin="anonymous"
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>

    <div className="infoWrapper">
      <QRCode />

      <div className="infos">
        <h2>{name}</h2>
        <p>{job}</p>
      </div>
    </div>
  </S.CardOption>
)

export default Card5
