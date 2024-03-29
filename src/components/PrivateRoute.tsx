import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

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
  return authState.isAuthenticated ? (<><NavBar /> {children}</>) : (<Navigate to="/login" state={{ from: location }} replace />);
});

export default PrivateRoute;
