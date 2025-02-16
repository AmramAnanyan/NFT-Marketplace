import { Navigate, useNavigate } from 'react-router';
import { useAuth } from 'shared/hooks/useAuth';
interface IProps {
  isPrivate: boolean;
  children: any;
}
const ProtectedRoute = ({ isPrivate, children }: IProps) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated, 'is auth ====>>');
  if (isPrivate && !isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
