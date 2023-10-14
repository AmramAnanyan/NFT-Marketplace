import { Navigate, useNavigate } from 'react-router'
interface Iprops {
  isPrivate: boolean
  children: any
}
const ProtectedRoute = ({ isPrivate, children }: Iprops) => {
  const navigate = useNavigate()
  if (isPrivate) {
    // needed check token
    return <Navigate to='/' replace />
  }
  return <div>{children}</div>
}

export default ProtectedRoute
