import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
  image: string
}

const Card7 = ({ image, color, name, job }: IProps) => (
  <S.CardOption
    style={{
      backgroundImage: image ? `url('${image}')` : 'url(/img/card_upload5.svg)'
    }}
    className="card"
  >
    <div>
      <p>{job}</p>
      <h2>{name}</h2>
    </div>
    <div>
      <div style={{ background: color }}>
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
    </div>
  </S.CardOption>
)

export default Card7
