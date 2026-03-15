import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Academics, Footer, Header, Personal } from './components/index';
import './css/preloader.css';
import './css/skeleton.css';
import './css/style.css';
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
  const root = createRoot(rootElement);
  flushSync(() => {
    root.render(<App />);
  });
}
