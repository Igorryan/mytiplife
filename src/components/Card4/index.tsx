import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card4 = ({ color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div className="content">
      <div className="qrWrapper" style={{ backgroundColor: color }}>
        <img
          className="qrCode"
          src="/img/qrcode_example.png"
          alt="QR Code Example"
        />
      </div>

      <div className="infosWrapper">
        <h2>{name}</h2>
        <p>{job}</p>

        <img
          className="logoCard"
          src="/img/logo_v2_white.svg"
          alt="MyTipLife Logo"
        />
      </div>
    </div>
  </S.CardOption>
)

export default Card4
