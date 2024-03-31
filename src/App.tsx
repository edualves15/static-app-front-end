import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './api';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext'; // Importe o AuthProvider

// Componentes carregados com a aplicação
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Componentes carregados sob demanda
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PublicPage = lazy(() => import('./pages/PublicPage'));
const PrivatePage = lazy(() => import('./pages/PrivatePage'));

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider> {/* Adicione o AuthProvider aqui */}
        <Suspense fallback={<Loading />}>
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
      </AuthProvider>
    </Router>
  );
};

export default App;
