import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card2 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <p>{job}</p>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
      <img className="logoCard" src="/img/logo_v2.svg" alt="MyTipLife Logo" />
    </div>
  </S.CardOption>
)

export default Card2
