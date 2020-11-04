import { createContext, useCallback, useContext, useState } from 'react'
import ToastContainer from 'components/ToastContainer'
import { v4 } from 'uuid'

export interface IToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
  timer?: boolean
}

interface IToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([])

  const addToast = useCallback((message: Omit<IToastMessage, 'id'>) => {
    const toast = {
      id: v4(),
      ...message
    }

    setMessages((oldMessages) => [...oldMessages, toast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages}></ToastContainer>
    </ToastContext.Provider>
  )
}

function useToast(): IToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
