import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PetProvider } from './context/PetContext';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PetProvider>
  </React.StrictMode>
);
