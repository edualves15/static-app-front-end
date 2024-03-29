import React from 'react';
import './PageWrapper.css'; // Importa o CSS específico do componente PageWrapper

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="pageWrapper-container">{children}</div>;
};

export default PageWrapper;
