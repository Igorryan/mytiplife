import * as S from './styles'

interface TooltipProps {
  title: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => (
  <S.Wrapper className={className}>
    {children}
    <span>{title}</span>
  </S.Wrapper>
)

export default Tooltip
