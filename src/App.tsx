import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './api';
import PrivateRoute from './components/PrivateRoute';

// Componentes carregados com a aplicação
import HomePage from './pages/HomePage';

// Componentes carregados sob demanda
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PublicPage = lazy(() => import('./pages/PublicPage'));
const PrivatePage = lazy(() => import('./pages/PrivatePage'));
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/public-page" element={<PublicPage />} />
          <Route path="/private-page" element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;