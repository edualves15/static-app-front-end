import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  description: string;
};

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
    </div>
  );
};

export default ProductPage;