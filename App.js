// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./modules/Home/Home'));
const AdminUser = lazy(() => import('./modules/AdminUser/AdminUser'));
const AdminDashboard = lazy(() => import('./modules/AdminUser/components/AdminDashboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="admin" element={<AdminUser />}>
              <Route index element={<AdminDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
