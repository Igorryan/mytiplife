import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card3 = ({ color, name, job }: IProps) => (
  <S.CardOption>
    <div className="content" style={{ backgroundColor: color }}>
      <div className="imageUploadedWrapper">
        <div className="imageUploaded"></div>
      </div>
      <h2>{name}</h2>
      <p>{job}</p>
      <img
        className="qrCode"
        src="/img/qrcode_example.png"
        alt="QR Code Example"
      />
      <img className="logoCard" src="/img/logo_v2.svg" alt="MyTipLife Logo" />
    </div>
  </S.CardOption>
)

export default Card3
