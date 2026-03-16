import React, { useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Academics, Footer, Header, Personal } from './components/index';
import './css/preloader.css';
import './css/skeleton.css';
import './css/style.css';
import './css/index.css';
import { renderMath } from './lib/math';

const App = () => {
  const containerRef = useRef(null);
  const [mathReady, setMathReady] = useState(false);

  useLayoutEffect(() => {
    renderMath(containerRef.current);
    setMathReady(true);
  }, []);

  return (
    <div ref={containerRef} className="container" style={{ visibility: mathReady ? 'visible' : 'hidden' }}>
      <Header />
      <Academics />
      <Personal />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
