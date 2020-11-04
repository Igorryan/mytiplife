import Redirect from 'utils/Redirect'
import * as S from './styles'

const SimpleHeader = () => {
  return (
    <S.Wrapper>
      <img
        onClick={() => Redirect('Home')}
        src="/img/headerIllustration.svg"
        alt=""
      />
    </S.Wrapper>
  )
}

export default SimpleHeader
