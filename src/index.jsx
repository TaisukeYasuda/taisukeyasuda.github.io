import React from 'react';
import { createRoot } from 'react-dom/client';

import { Academics, Footer, Header, Personal } from './components/index';
import './css/skeleton.css';
import './css/style.css';
import './css/sticky.css';
import './css/index.css';

const App = () => (
  <div className="container">
    <Header />
    <Academics />
    <Personal />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
