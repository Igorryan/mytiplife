import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <S.Wrapper>
      <S.Button {...rest}>
        {loading ? (
          <S.SpinnerAnimation src="/animations/spinner.gif" />
        ) : (
          children
        )}
      </S.Button>
    </S.Wrapper>
  )
}

export default Button
