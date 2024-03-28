import React, { useEffect, useState, memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = memo(({ children }) => {
  const location = useLocation();
  const [authState, setAuthState] = useState({ checking: true, isAuthenticated: false });

  useEffect(() => {
    axios.get('/api/verify')
      .then(() => { setAuthState({ checking: false, isAuthenticated: true }); })
      .catch(() => { setAuthState({ checking: false, isAuthenticated: false }); });
  }, []);

  if (authState.checking) return null;
  return authState.isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
});

export default PrivateRoute;
