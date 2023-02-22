import { useSelector } from 'react-redux';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const RequireAuth = () => {
  const { authStatus } = useSelector((store) => store.auth);
  const location = useLocation();
  return authStatus ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export { RequireAuth };
