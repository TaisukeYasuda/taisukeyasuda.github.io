import * as React from 'react';

const Academics = () => (
  <section id="academics" className="docs-section">
    <h2>Academics</h2>
    <h3>Education</h3>
    <div className="school">
      <h3>Carnegie Mellon University, 2015 - 2019</h3>
      <p>
        MS, Mathematics <br />
        BS, Mathematics and Computer Science <br />
        (<a href="/coursework">list of coursework</a>)
      </p>
    </div>
    <h3>Research</h3>
    <div className="research">
      I am broadly interested in theoretical computer science, machine learning, and mathematical analysis. I'm particularly excited by provable algorithmic and statistical guarantees of learning algorithms, their tradeoffs, and corresponding lower bounds. Some projects I'm currently working on are:
      <ul>
        <li>Kernel query complexity with Prof. <a href="http://www.cs.cmu.edu/~dwoodruf/">David Woodruff</a></li>
        <li>Asymptotic stability of Faraday oscillation solutions to viscous incompressible free boundary problems with Prof. <a href="http://math.cmu.edu/~iantice/">Ian Tice</a></li>
        <li>Improvements to the slowness of Cahn-Hilliard phase boundary motion with Prof. <a href="http://giovannileoni.weebly.com/">Giovanni Leoni</a></li>
      </ul>
    </div>

    <h3>Talks</h3>
    <table style={ {width: '100%'} }>
      <tbody>
        <tr>
          <td>How it's made: lower bounds for randomized algorithms (<a href="assets/docs/talks/07-27-2018-yao-minimax-principle.pdf">slides</a>)</td>
          <td>Summer Math Seminar, July 27, 2018</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Academics;
