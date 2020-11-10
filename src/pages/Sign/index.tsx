import * as S from './styles'
import Footer from 'components/Footer'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import SimpleHeader from 'components/SimpleHeader'

const Sign: React.FC = () => (
  <S.Wrapper>
    <SimpleHeader />

    <section>
      <SignIn></SignIn>
      <div className="divisor"></div>
      <SignUp></SignUp>
    </section>

    <Footer></Footer>
  </S.Wrapper>
)

export default Sign
