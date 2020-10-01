import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
  image: string
}

const Card2 = ({ image, color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div
      style={{
        backgroundImage: image
          ? `url('${image}')`
          : 'url(/img/card_upload3.svg)'
      }}
    ></div>
    <div
      style={{
        backgroundColor: color
      }}
    >
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

export default Card2
