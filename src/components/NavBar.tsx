import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../context/AuthContext'; // Certifique-se de que o caminho esteja correto

const NavBar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="navBar-container">
      {/* Tornando a logo clicável e redirecionando para a Home */}
      <div className="navBar-logo" onClick={navigateHome} style={{ cursor: 'pointer' }}>Logo</div>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="navBar-logoutButton">Logout</button>
      ) : (
        <button onClick={handleLogin} className="navBar-loginButton">Login</button>
      )}
    </div>
  );
};

export default NavBar;
