import * as React from 'react';

const clearStyle = { clear: 'both'},
      imgStyle = {
        borderRadius: '10px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%'
      },
      bold = { fontWeight: 'bold' };

const Header = () => (
  <section className="header">
    <div className="row">
      <div className="eight columns">
        <h1 style={ {fontWeight: 'lighter', fontSize: '3em'} }>Taisuke Yasuda</h1>
        <div className="social-links">
          <span style={ bold }>Contact:</span>&emsp; taisukey@cs.cmu.edu
        </div>
        <p>
          I am a first year PhD student in the <a href='http://theory.cs.cmu.edu/'>Theory Group</a> in the Computer Science Department at Carnegie Mellon University. I am extremely fortunate to be advised by <a href='https://www.cs.cmu.edu/~dwoodruf/'>David Woodruff</a>. I am broadly interested in theoretical computer science, especially in algorithms and complexity for problems from data science and machine learning.
        </p>
        <p>
          Previously, I was a Junior Quantitative Trader at <a href='https://akunacapital.com'>Akuna Capital</a>. My CV is available <a href="/docs/cv.pdf">here</a>.
        </p>
      </div>
        <div className="four columns">
          <img src="/assets/img/tai.jpg" style={ imgStyle } /> <br />
        </div>
    </div>

    <br style={ clearStyle } />
  </section>


);

export default Header;
