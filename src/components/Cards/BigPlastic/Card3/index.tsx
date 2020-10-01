import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
  image: string
}

const Card3 = ({ image, color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div
      style={{
        backgroundImage: image
          ? `url('${image}')`
          : 'url(/img/card_upload4.svg)'
      }}
      className="img"
    >
      <img
        className="logoCard"
        src="/img/logo_v2_white.svg"
        alt="MyTipLife Logo"
      />
    </div>

    <div className="color" style={{ backgroundColor: color }}>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
      <p>{job}</p>
      <h2>{name}</h2>
    </div>
  </S.CardOption>
)

export default Card3
