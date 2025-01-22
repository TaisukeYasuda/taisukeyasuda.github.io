import 'babel-polyfill';
import * as JQuery from 'jquery';
const $ = JQuery.default;

import { createRoot } from 'react-dom/client';

import * as Components from './components/coursework';

import './css/skeleton.css';
import './css/coursework.css';

const App = () => (
  <div className="container">
    <h1>Coursework</h1>
    <Components.Cmu />
  </div>
);

$(document).ready(() => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
});
