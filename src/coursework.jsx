import React from 'react';
import { createRoot } from 'react-dom/client';

import { Cmu } from './components/coursework';
import './css/skeleton.css';
import './css/style.css';
import './css/coursework.css';
import './css/index.css';

const App = () => (
  <div className="container">
    <h1>Coursework</h1>
    <Cmu />
  </div>
);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
