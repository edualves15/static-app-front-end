import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../context/AuthContext'; // Importe o hook useAuth
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('/api/login', { email, password })
      .then(() => {
        login(); // Chame login ao invés de apenas navegar
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error('Erro ao realizar o login:', error);
        setError('Email ou senha inválidos');
      });
  };

  return (
    <PageWrapper>
      <div style={verticalCenterStyle}>
        <div className="loginPage-container">
          <h2 className="loginPage-header">Login</h2>
          <form onSubmit={handleLogin} className="loginPage-form">
            <div className="loginPage-inputGroup">
              <label htmlFor="email" className="loginPage-label">E-mail:</label>
              <input
                type="email"
                id="email"
                className="loginPage-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginPage-inputGroup">
              <label htmlFor="password" className="loginPage-label">Senha:</label>
              <input
                type="password"
                id="password"
                className="loginPage-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="loginPage-button">Entrar</button>
          </form>
        </div>
        {error && <p className="loginPage-error">{error}</p>}
      </div>
    </PageWrapper>
  );
};

// Estilo auxiliar para centralização vertical
const verticalCenterStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Centraliza verticalmente
  minWidth: '100%',
  minHeight: '100%',
};

export default LoginPage;
