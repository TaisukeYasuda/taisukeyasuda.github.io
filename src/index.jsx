import 'babel-polyfill';
import * as JQuery from 'jquery';
const $ = JQuery.default;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Components from './components';
import './css/skeleton.css';
import './css/style.css';
import './css/sticky.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.setNavRef = this.setNavRef.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setNavRef(ref) {
    if (this) {
      this.navRef = ref;
      this.navOffsetTop = $(ref).offset().top;
    }
  }

  handleScroll() {
    document.body.classList.remove('has-docked-nav');
    this.navOffsetTop = $(this.navRef).offset().top;
    let scrollTop = window.scrollY,
        hasClass = document.body.classList.contains('has-docked-nav');
    if (this.navOffsetTop < scrollTop && !hasClass) {
      document.body.classList.add('has-docked-nav');
    }
    if (this.navOffsetTop > scrollTop && hasClass) {
      document.body.classList.remove('has-docked-nav');
    }
  }

  render() {
    return (
      <div className="container">
        <Components.Header />
        <Components.Navbar setNavRef={ this.setNavRef } />
        <Components.Academics />
        <Components.Projects />
        <Components.Other />
        <Components.Footer />
      </div>
    );
  }
}

$(document).ready(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
