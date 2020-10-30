import { useTransition } from 'react-spring'
import * as S from './styles'

import Toast from 'components/ToastContainer/Toast'
import { IToastMessage } from 'hooks/toast'

interface ToastContainerProps {
  messages: IToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' }
    }
  )

  return (
    <S.Wrapper>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} toast={item}></Toast>
      ))}
    </S.Wrapper>
  )
}

export default ToastContainer
