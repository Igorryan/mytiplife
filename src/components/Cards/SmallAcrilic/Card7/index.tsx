import * as S from './styles'
import QRCode from 'components/QRCode'

import { ICardProps } from 'DTOS/ICardProducts'

const Card7 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload5.svg)'
    }}
    className="card"
  >
    <div>
      <p>{job}</p>
      <h2>{name}</h2>
    </div>
    <div>
      <div style={{ background: color }}>
        <QRCode />
        <img
          className="logoCard"
          src="/img/logo_v2_white.svg"
          alt="MyTipLife Logo"
        />
      </div>
    </div>
  </S.CardOption>
)

export default Card7
