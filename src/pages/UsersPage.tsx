import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: number;
  username: string;
  email: string;
};

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data.data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>Nenhum usuário encontrado</p>
      )}
    </div>
  );
};

export default UsersPage;
