import * as React from 'react';

const clearStyle = { clear: 'both'},
      imgStyle = {
        borderRadius: '10px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%'
      };

const Header = () => (
  <section className="header">
    <div className="row">
      <div className="eight columns">
        <h1 style={ {fontWeight: 'lighter', fontSize: '3em'} }>Taisuke Yasuda</h1>
        <div style={ {padding: '0px 0px 20px 0px'} }>
          <span style={ {fontWeight: 'bold'} }>Carnegie Mellon University</span> (2017 - 2019) <br />
          MS, Mathematics <br />
          <span style={ {fontWeight: 'bold'} }>Carnegie Mellon University</span> (2015 - 2019) <br />
          BS, Mathematics and Computer Science
        </div>
        <div className="social-links">
          <span style={ {fontWeight: 'bold'} }>Contact:</span>&emsp; taisukey@andrew.cmu.edu
        </div>
        <p>
          I am a Junior Quantitative Trader at <a href='https://akunacapital.com'>Akuna Capital</a>. Previously, I studied Math and Computer Science at Carnegie Mellon University. My CV is available <a href="/docs/cv.pdf">here</a>.
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
