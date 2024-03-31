import React from 'react';
import './PageWrapper.css';
import NavBar from './NavBar';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="pageWrapper-container">{children}</div>
    </>
  );
};

export default PageWrapper;
