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
        <h1 className="title">Taisuke Yasuda</h1>
        <div style={ {padding: '0px 0px 20px 0px'} }>
          Carnegie Mellon University (2015 - 2019) <br />
          MS, Mathematics <br />
          BS, Mathematics and Computer Science
        </div>
        <div className="social-links">
          <i className="fas fa-envelope"></i>&emsp; taisukey@andrew.cmu.edu <br />
          <i className="fas fa-phone"></i>&emsp; (919)259-9967 <br />
        </div>
        <p>
          Hi! I'm Tai, a student at Carnegie Mellon University studying in the <a href="https://www.math.cmu.edu/undergraduate/honors.html">Honors Program in Mathematics</a> with an <a href="http://www.cs.cmu.edu/undergraduate-programs">Additional Major in Computer Science</a>.
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
