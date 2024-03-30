import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';

type PrivateItem = {
  id: number;
  value1: string;
  value2: string;
  value3: number;
};

const PrivatePage: React.FC = () => {
  const [items, setItems] = useState<PrivateItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/privateItems')
      .then(response => { setItems(response.data.data); })
      .catch(error => console.error('Erro ao buscar items privados:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <h2>Itens privados</h2>
      {loading ? null : items.length > 0 ? (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.value1}</h3>
            <p>{item.value2}</p>
            <p>{item.value3}</p>
          </div>
        ))
      ) : (
        <p>Nenhum item privado encontrado</p>
      )}
    </PageWrapper>
  );
};

export default PrivatePage;
