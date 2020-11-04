import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card6 = ({ color, name, job }: ICardProps) => (
  <S.CardOption className="card">
    <div className="content" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <p>{job}</p>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
    </div>
    <div className="footer"></div>
  </S.CardOption>
)

export default Card6
