import * as React from 'react';

const Academics = () => (
  <section id="academics" className="docs-section">
    <h3>Research</h3>
    <div className="research">
      I am broadly interested in theoretical computer science, especially in provable algorithms and lower bounds for learning problems.

      <ul>
      <li>
        The Query Complexity of Mastermind with $\ell_p$ Distances <br />
        (with Manuel Fernández V and David P. Woodruff)
      </li>
      <li>
        Tight Kernel Query Complexity of Kernel Ridge Regression and Kernel $k$-means Clustering <br />
        (with Manuel Fernández V and David P. Woodruff)
      </li>
      <li>
        Asymptotic Stability of the Faraday Wave Problem <br />
        (with David Altizio, Ian Tice, and Xinyu Wu)
      </li>
      </ul>
    </div>

    <h3>Talks and Presentations</h3>
    <table style={ {width: '100%'} }>
      <tbody>
        <tr>
          <td>How it's made: lower bounds for randomized algorithms</td>
          <td>Summer Math Seminar, July 27, 2018</td>
        </tr>
      </tbody>
    </table>

    <h3>Teaching</h3>
    <table style={ {width: '100%'} }>
      <tbody>
        <tr>
          <td><a href="https://www.cs.cmu.edu/afs/cs/academic/class/15451-s19/www/">15-451 Algorithms</a> (TA)</td>
          <td>Spring 2019</td>
        </tr>
        <tr>
          <td><a href="http://www.math.cmu.edu/~mradclif/teaching/127S19/">21-127 Concepts of Mathematics</a> (TA)</td>
          <td>Spring 2019</td>
        </tr>
        <tr>
          <td><a href="http://www.math.cmu.edu/~mradclif/teaching/241F18/">21-241 Linear Algebra</a> (TA)</td>
          <td>Fall 2018</td>
        </tr>
        <tr>
          <td>21-356 Principles of Real Analysis II (grader)</td>
          <td>Spring 2017</td>
        </tr>
        <tr>
          <td><a href="http://www.math.cmu.edu/~ploh/2016-putnam.shtml">21-295 Putnam Seminar</a> (grader)</td>
          <td>Fall 2016</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Academics;
