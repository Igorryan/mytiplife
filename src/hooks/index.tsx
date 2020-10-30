import { AuthProvider } from './auth'
import { ToastProvider } from './toast'
import { CartProvider } from './cart'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CartProvider>{children}</CartProvider>
    </ToastProvider>
  </AuthProvider>
)

export default AppProvider
