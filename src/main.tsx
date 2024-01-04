import React from 'react'
import ReactDOM from 'react-dom/client'
import "@wsa/echo-components/dist/signia.js";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './RouterPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterPage/>
    </BrowserRouter>
  </React.StrictMode>,
)
