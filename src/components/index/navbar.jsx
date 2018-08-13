import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = (props) => (
  <div>
    <div className="navbar-spacer"></div>
    <nav className="navbar" ref={ props.setNavRef }>
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item"><AnchorLink className="navbar-link" href="#academics">Academics</AnchorLink></li>
          <li className="navbar-item"><AnchorLink className="navbar-link" href="#projects">Software Projects</AnchorLink></li>
          <li className="navbar-item"><AnchorLink className="navbar-link" href="#other">Other</AnchorLink></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
