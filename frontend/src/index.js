import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from "./utils/store";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);

