import * as S from './styles'

//Components
import Header from '../../components/Header'
import CardDetails from '../../components/CardDetails'
import RelatedProducts from '../../components/RelatedProducts'
import Footer from '../../components/Footer'
import HowToUse from '../../components/HowToUse'

const StickerCard = () => (
  <S.Wrapper>
    <Header />
    <CardDetails></CardDetails>
    <HowToUse />
    <RelatedProducts />
    <Footer />
  </S.Wrapper>
)

export default StickerCard
