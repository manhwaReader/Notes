// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-native';
import Home from './pages/Home'; // Import your pages
import Add from './pages/Add';
import List from './pages/List';
import Edit from './pages/Edit';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<List />} />
    <Route path="/Add" element={<Add />} />
    <Route path="/List" element={<List />} />
    <Route path="/Edit/:key" element={<Edit />} />
  </Routes>
);

export default AppRoutes;
