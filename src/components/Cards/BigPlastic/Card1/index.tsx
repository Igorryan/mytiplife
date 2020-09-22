import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card1 = ({ color, name, job }: IProps) => (
  <S.CardOption style={{ background: color }} className="card">
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
  </S.CardOption>
)

export default Card1
