import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Para versões mais recentes do React 18+
import App from './App'; // O componente raiz


// Cria um root React e renderiza o componente raiz
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
