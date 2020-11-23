import { useMemo } from 'react'

import QrCode from 'qrcode.react'
import { useAuth } from 'hooks/auth'

const QRCode = () => {
  const { isAuthenticated, username } = useAuth()

  const link = useMemo(
    () =>
      isAuthenticated()
        ? `https://www.mytiplife.com/@${username}`
        : 'https://www.mytiplife.com/home',
    [isAuthenticated, username]
  )

  return <QrCode className="qrCode" value={link} />
}

export default QRCode
