import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ Component, ...rest }) {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  if (!isUserLoggedIn) return <Navigate to="/login" replace />;
  return <Component {...rest} />;
}
