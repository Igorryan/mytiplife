import * as S from './styles'

interface IProps {
  color: string
  name: string
  job: string
}

const Card2 = ({ color, name, job }: IProps) => (
  <S.CardOption className="card">
    <div className="maskBackground">
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
    <svg
      width="230"
      viewBox="0 0 422 561"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.4428 0.060887C55.4402 0.230839 55.439 0.401101 55.439 0.571663C55.439 18.9084 70.3039 33.7733 88.6406 33.7733H333.808C352.145 33.7733 367.01 18.9084 367.01 0.571663C367.01 0.401101 367.008 0.230839 367.006 0.060887H379.637C402.933 0.060887 421.819 18.9464 421.819 42.2428V518.731C421.819 542.027 402.933 560.912 379.637 560.912H42.1819C18.8855 560.912 6.10352e-05 542.027 6.10352e-05 518.731V42.2428C6.10352e-05 18.9464 18.8855 0.060887 42.1819 0.060887H55.4428Z"
        fill={color}
      />
    </svg>
  </S.CardOption>
)

export default Card2
