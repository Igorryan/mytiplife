import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import api from 'services/api'

interface AuthState {
  token: string
  name: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  name: string
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    const token = localStorage.getItem('@MyTipLife:token')
    const name = localStorage.getItem('@MyTipLife:name')

    if (token && name) {
      setData({
        token,
        name
      })
    }
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password
    })

    const { name, token } = response.data.data

    localStorage.setItem('@MyTipLife:token', token)
    localStorage.setItem('@MyTipLife:name', name)

    setData({ token, name })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@MyTipLife:token')
    localStorage.removeItem('@MyTipLife:name')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ name: data.name, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
