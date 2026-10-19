import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

const base = import.meta.env.BASE_URL;
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${base}sw.js`, { scope: base }).catch(() => {});
  });
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
);
