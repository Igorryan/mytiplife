import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { motion } from 'framer-motion'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <S.Wrapper>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <S.Button {...rest}>
          {loading ? (
            <S.SpinnerAnimation src="/animations/spinner.gif" />
          ) : (
            children
          )}
        </S.Button>
      </motion.div>
    </S.Wrapper>
  )
}

export default Button
