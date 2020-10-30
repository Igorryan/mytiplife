import * as S from './styles'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { IToastMessage, useToast } from 'hooks/toast'
import { useEffect } from 'react'

interface ToastProps {
  toast: IToastMessage
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />
}

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [toast.id, removeToast])

  return (
    <S.Wrapper
      style={style}
      type={toast.type}
      hasdescription={toast.description ? 1 : 0}
    >
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={() => removeToast(toast.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </S.Wrapper>
  )
}

export default Toast
