import { useSelector } from 'react-redux';
import { getIsloggedIn } from 'redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogin = useSelector(getIsloggedIn);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
