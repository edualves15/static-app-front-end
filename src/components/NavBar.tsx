import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; // Importando o CSS específico do NavBar

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    axios.post('/api/logout')
      .then(() => navigate('/'))
      .catch(error => console.error('Erro ao realizar o logout:', error));
  };

  return (
    <div className="navBar-container">
      <div className="navBar-logo">Logo</div>
      <button onClick={handleLogout} className="navBar-logoutButton">
        Logout
      </button>
    </div>
  );
};

export default NavBar;
