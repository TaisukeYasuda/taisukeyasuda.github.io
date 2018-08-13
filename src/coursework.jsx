import 'babel-polyfill';
import * as JQuery from 'jquery';
const $ = JQuery.default;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

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
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
