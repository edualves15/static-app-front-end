import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface AuthContextType {
  isLoggedIn: boolean;
  isVerifying: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get('/api/verify');
        setIsLoggedIn(true);
      }
      catch (error) { setIsLoggedIn(false); }
      finally { setIsVerifying(false); }
    };

    verifyAuth();
  }, []);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    axios.post('/api/logout').catch((error) => console.error('Erro ao fazer logout:', error));
    // Considere também limpar o estado de autenticação armazenado (localStorage, cookies, etc.) aqui
  };

  if (isVerifying) return null;
  return (
    <AuthContext.Provider value={{ isLoggedIn, isVerifying, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
