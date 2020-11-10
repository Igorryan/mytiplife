import * as S from './styles'
import Footer from '../../components/Footer'
import SignIn from './_SignIn'
import SignUp from './_SignUp'
import SimpleHeader from 'components/SimpleHeader'

const Sign = () => (
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
