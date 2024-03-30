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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/publicItems')
      .then(response => { setItems(response.data.data); })
      .catch(error => console.error('Erro ao buscar items públicos:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <h2>Itens públicos</h2>
      {loading ? null : items.length > 0 ? (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.value1}</h3>
            <p>{item.value2}</p>
          </div>
        ))
      ) : (
        <p>Nenhum item público encontrado</p>
      )}
    </PageWrapper>
  );
};

export default PublicPage;
