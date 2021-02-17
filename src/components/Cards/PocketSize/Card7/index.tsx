import * as S from './styles'
import QRCode from 'components/QRCode'

import { ICardProps } from 'DTOS/ICardProducts'

const Card7 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <img
        crossOrigin="anonymous"
        className="illustration"
        src="/img/illustration1.svg"
        alt="illustration of a man playing the drums"
      />
      <h2>{name}</h2>
      <p>{job}</p>
      <QRCode />
    </div>
    <div className="footer">
      <img
        crossOrigin="anonymous"
        className="logoCard"
        src="/img/logo_v2.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card7
