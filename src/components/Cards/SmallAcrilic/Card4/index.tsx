import * as S from './styles'

import { ICardProps } from 'DTOS/ICardProducts'

const Card4 = ({ image, color, name, job }: ICardProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload3.svg)'
    }}
    className="card"
  >
    <div>
      <p>{job}</p>

      <svg
        className="backgroundMask"
        width="100%"
        height="100%"
        viewBox="0 0 350 532"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.0037 0C46.0012 0.161215 46 0.322724 46 0.484518C46 17.878 60.1002 31.9781 77.4936 31.9781H273.029C290.423 31.9781 304.523 17.878 304.523 0.484518C304.523 0.322724 304.522 0.161215 304.519 0H315C334.33 0 350 15.67 350 35V497C350 516.33 334.33 532 315 532H35C15.67 532 0 516.33 0 497V35C0 15.67 15.67 0 35 0H46.0037Z"
          fill={color}
        />
      </svg>
      <h2>{name}</h2>
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

      <svg
        className="bottomMask"
        width="180"
        height="66"
        viewBox="0 0 300 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.664062"
          y="0.366394"
          width="298.424"
          height="65.6336"
          rx="32.8168"
          fill="#FFE066"
        />
      </svg>
    </div>
  </S.CardOption>
)

export default Card4
