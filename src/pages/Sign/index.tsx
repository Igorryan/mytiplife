import * as S from './styles'
import Footer from '../../components/Footer'
import FormSignIn from '../../components/FormSignIn'
import FormSignUp from '../../components/FormSignUp'

const Sign = () => (
  <S.Wrapper>
    <header>
      <img src="/img/headerIllustration.svg" alt="" />
    </header>

    <section>
      <FormSignIn></FormSignIn>
      <div className="divisor"></div>
      <FormSignUp></FormSignUp>
    </section>

    <Footer></Footer>
  </S.Wrapper>
)

export default Sign
