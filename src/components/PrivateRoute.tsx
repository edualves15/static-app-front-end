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
      .then(() => { setAuthState({ checking: false, isAuthenticated: true }) })
      .catch(error => {
        setAuthState({ checking: false, isAuthenticated: false });
        console.error('Erro ao autenticar o usuário:', error)
      })
  }, []);

  return !authState.checking && !authState.isAuthenticated ?
    <Navigate to="/login" state={{ from: location }} replace /> : children;
});

export default PrivateRoute;