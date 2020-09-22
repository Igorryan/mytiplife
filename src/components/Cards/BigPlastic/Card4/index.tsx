import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card4 = ({ color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div className="img"></div>

    <div className="color" style={{ backgroundColor: color }}>
      <p>{job}</p>
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
    </div>
  </S.CardOption>
)

export default Card4
