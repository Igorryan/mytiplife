import * as S from './styles'
import QRCode from 'components/QRCode'

import { ICardProps } from 'DTOS/ICardProducts'

const Card2 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload3.svg)'
    }}
    className="card"
  >
    <div></div>
    <div
      style={{
        backgroundColor: color
      }}
    >
      <h2>{name}</h2>
      <p>{job}</p>
      <QRCode />
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card2
