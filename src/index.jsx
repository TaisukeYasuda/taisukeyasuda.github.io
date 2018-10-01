import 'babel-polyfill';
import * as JQuery from 'jquery';
const $ = JQuery.default;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Components from './components/index';
import './css/skeleton.css';
import './css/style.css';
import './css/sticky.css';

const App = () => (
  <div className="container">
    <Components.Header />
    <Components.Academics />
    <Components.Footer />
  </div>
);


$(document).ready(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
