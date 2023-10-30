// App.js
import React from 'react';
import { NativeRouter } from 'react-router-native';
import AppRoutes from './Routes';

export default function App() {
  return (
    <NativeRouter>
      <AppRoutes />
    </NativeRouter>
  );
}
