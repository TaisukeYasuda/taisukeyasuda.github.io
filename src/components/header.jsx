import * as React from 'react';

const clearStyle = { clear: 'both'},
      imgStyle = {
        borderRadius: '5px',
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
        <div className="social-links">
          <i className="fas fa-at"></i>&emsp; taisukey@andrew.cmu.edu <br />
          <i className="fas fa-phone"></i>&emsp; (919)259-9967 <br />
          <i className="fab fa-linkedin"></i>&emsp; <a href="https://www.linkedin.com/in/taisukeyasuda">taisukeyasuda</a> <br />
          <i className="fab fa-github"></i>&emsp; <a href="https://www.github.com/TaisukeYasuda">taisukeyasuda</a> <br />
          <i className="fas fa-file-pdf"></i>&emsp; <a href="assets/docs/resume.pdf">resume</a> <br />
        </div>
        <p>
          Hi! It's a pleasure to have you here. I'm Tai, an undergrad at Carnegie Mellon University studying in the <a href="https://www.math.cmu.edu/undergraduate/honors.html">Honors Program in Mathematics</a> with an <a href="http://www.cs.cmu.edu/undergraduate-programs">Additional Major in Computer Science</a>. For more, check out my site!
        </p>
      </div>
        <div className="four columns">
          <img src="/assets/img/tai.jpg" style={ imgStyle } /> <br />
        </div>
    </div>

    <br style={ clearStyle } />
    <br />
  </section>


);

export default Header;
