import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <WebAppProvider>
        <App />
      </WebAppProvider>
    </React.StrictMode>,
  );
}
