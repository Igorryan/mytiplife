import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
  image: string
}

const Card3 = ({ image, color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div className="imageUploaded">
      <img src={image ? image : '/img/card_upload2.svg'} alt="" />
    </div>

    <div className="content" style={{ backgroundColor: color }}>
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
