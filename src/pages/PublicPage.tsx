import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';

type PublicItem = {
  id: number;
  value1: string;
  value2: string;
};

const PublicPage: React.FC = () => {
  const [items, setItems] = useState<PublicItem[]>([]);

  useEffect(() => {
    axios.get('/api/publicItems')
      .then(response => setItems(response.data.data))
      .catch(error => console.error('Erro ao buscar items públicos:', error));
  }, []);

  return (
    <PageWrapper>
      <h2>Ítens públicos</h2>
      {items && items.length > 0 ? (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.value1}</h3>
            <p>{item.value2}</p>
          </div>
        ))
      ) : (
        <p>Nenhum item privado encontrado</p>
      )}
    </PageWrapper>
  );
};

export default PublicPage;
