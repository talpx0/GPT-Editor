import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import Download from './page/Download.tsx';
import "katex/dist/katex.min.css";
import  MarkdownPage  from './page/Markdown.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={<Download />} />
        <Route path='/markdown' element={<MarkdownPage />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

