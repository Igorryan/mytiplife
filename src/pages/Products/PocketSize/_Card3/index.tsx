import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card3 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption className="card" style={{ backgroundColor: color }}>
    <div
      className="content"
      style={{
        backgroundImage: `url(${image ? image : '/img/card_upload7.svg'})`
      }}
    >
      <div className="wrapper">
        <img
          className="qrCode"
          src="/img/qrcode_example.png"
          alt="QR Code Example"
        />

        <div className="info-wrapper">
          <div className="infos">
            <h2>{name}</h2>
            <p>{job}</p>
          </div>
        </div>
      </div>
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>
  </S.CardOption>
)

export default Card3
