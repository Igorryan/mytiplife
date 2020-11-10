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
  username: string
}

export interface SignInCredentials {
  username: string
  password: string
}

interface AuthContextData {
  username: string
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  isAuthenticated(): boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    const token = localStorage.getItem('@MyTipLife:token')
    const username = localStorage.getItem('@MyTipLife:username')

    if (token && username) {
      setData({
        token,
        username
      })
    }
  }, [])

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('login', {
      username,
      password
    })

    localStorage.setItem('@MyTipLife:token', response.data.data.token)
    localStorage.setItem('@MyTipLife:username', username)

    setData(response.data.data)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@MyTipLife:token')
    localStorage.removeItem('@MyTipLife:username')

    setData({} as AuthState)
  }, [])

  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem('@MyTipLife:token')

    if (!token) {
      return false
    }

    return true
  }, [])

  return (
    <AuthContext.Provider
      value={{ username: data.username, signIn, signOut, isAuthenticated }}
    >
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
