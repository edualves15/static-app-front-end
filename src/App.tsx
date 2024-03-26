import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './api';
import PrivateRoute from './components/PrivateRoute';

// Componentes carregados sob demanda
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          {/* ... outras rotas */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
