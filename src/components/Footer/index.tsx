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
        <a href="https://www.linkedin.com/in/igorryan/">Artstipjar Website</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/igorryan/">Terms of use</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/igorryan/">Privacy Policy</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/igorryan/">About us</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/igorryan/">Contact us</a>
      </li>
    </nav>

    <div className="copyright">
      Copyright © 2019 Mytiplife. All rights reserved.
    </div>
  </S.Wrapper>
)

export default Footer
