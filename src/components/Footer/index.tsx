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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mytiplife.com/terms/terms"
        >
          Terms of use
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mytiplife.com/terms/privacy-policy"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mytiplife.com/terms/about-us"
        >
          About us
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mytiplife.com/contact-us"
        >
          Contact us
        </a>
      </li>
    </nav>

    <div className="copyright">
      Copyright © {new Date().getFullYear()} Mytiplife. All rights reserved.
    </div>
  </S.Wrapper>
)

export default Footer
