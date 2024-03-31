import React, { memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = memo(({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : (<Navigate to="/login" state={{ from: location }} replace />);
});

export default PrivateRoute;
