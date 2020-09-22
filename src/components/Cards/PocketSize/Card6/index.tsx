import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card6 = ({ color, name, job }: IProps) => (
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
