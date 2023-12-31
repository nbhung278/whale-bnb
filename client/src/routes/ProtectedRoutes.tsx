import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const ProtectedRoutes = ({ children }: any) => {
  const token = cookies.get('TOKEN')
  return token?.access_token ? <>{children}</> : <Navigate to='/login' replace={true} />
}

export default ProtectedRoutes
