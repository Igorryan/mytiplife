import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card1 = ({ color, name, job }: ICardProps) => (
  <S.CardOption style={{ background: color }} className="card">
    <div>
      <h2>{name}</h2>
      <p>{job}</p>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card1
