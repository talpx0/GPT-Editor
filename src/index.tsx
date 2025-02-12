import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import Download from './page/Download.tsx';
import "katex/dist/katex.min.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={<Download />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

