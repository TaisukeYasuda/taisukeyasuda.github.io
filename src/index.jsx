import 'babel-polyfill';
import * as JQuery from 'jquery';
const $ = JQuery.default;

import { StrictMode, createRoot } from 'react-dom/client';

import * as Components from './components/index';
import './css/skeleton.css';
import './css/style.css';
import './css/sticky.css';

const App = () => (
  <div className="container">
    <Components.Header />
    <Components.Academics />
    <Components.Personal />
    <Components.Footer />
  </div>
);


$(document).ready(() => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
});
