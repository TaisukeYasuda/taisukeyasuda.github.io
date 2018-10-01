import * as React from 'react';

const Academics = () => (
  <section id="academics" className="docs-section">
    <h3>Research</h3>
    <div className="research">
      I am broadly interested in theoretical computer science, especially in provable algorithms and lower bounds in machine learning. I've also done some work in analysis and partial differential equations. Some projects I'm currently working on are:
      <ul>
        <li>Kernel query complexity, with <a href="http://www.cs.cmu.edu/~dwoodruf/">David Woodruff</a></li>
        <li>Asymptotic stability of Faraday oscillation solutions to viscous incompressible free boundary problems, with <a href="http://math.cmu.edu/~iantice/">Ian Tice</a></li>
        <li>Improvements to the slowness of Cahn-Hilliard phase boundary motion, with <a href="http://giovannileoni.weebly.com/">Giovanni Leoni</a></li>
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

    <h3>Teaching</h3>
    <table style={ {width: '100%'} }>
      <tbody>
        <tr>
          <td><a href="http://www.math.cmu.edu/~mradclif/teaching/241F18/">21-241 Linear Algebra</a> (TA)</td>
          <td>Fall 2018</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Academics;
