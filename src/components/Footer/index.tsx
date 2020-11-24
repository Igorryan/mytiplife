import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <div className="illustrationsWrapper">
      <img
        className="illustration"
        src="/img/illustration_footer.svg"
        alt="Musicians Illustration"
      />
      <img className="logo" src="/img/logo.svg" alt="Logo MyTipLife" />
    </div>

    <nav>
      <li>
        <a href="#">Terms of use</a>
      </li>
      <li>
        <a href="#">Privacy Policy</a>
      </li>
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Contact us</a>
      </li>
    </nav>

    <div className="copyright">
      Copyright © 2019 Mytiplife. All rights reserved.
    </div>
  </S.Wrapper>
)

export default Footer
