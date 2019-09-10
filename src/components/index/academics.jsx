import * as React from 'react';

const Academics = () => (
  <section id="academics" className="docs-section">
    <h3>Research</h3>
    <div className="research">
      I am broadly interested in theoretical computer science, especially in provable algorithms and lower bounds for learning problems.

      <ul>
      <li>
        <span style={ {fontStyle: 'italic'} }>Graph Spanners in the Message-Passing Model</span> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        in submission <br /> <br />
      </li>
      <li>
        <span style={ {fontStyle: 'italic'} }>The Query Complexity of Mastermind with $\ell_p$ Distances</span> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <span style={ {fontWeight: 'bold'} }>APPROX 2019</span> (to appear) <br /> <br />
      </li>
      <li>
        <span style={ {fontStyle: 'italic'} }>The Nonlinear Stability Regime of the Viscous Faraday Wave Problem</span> <br />
        (with David Altizio, Ian Tice, and Xinyu Wu) <br />
        in submission <br />
        [<a href='https://arxiv.org/abs/1905.04747'>arXiv</a>] [<a href='/docs/ms-thesis/ms-thesis.pdf'>master's thesis</a>] [<a href='/docs/ms-thesis/slides.pdf'>defense slides</a>] <br /> <br />
      </li>
      <li>
        <span style={ {fontStyle: 'italic'} }>Tight Kernel Query Complexity of Kernel Ridge Regression and Kernel $k$-means Clustering</span> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <span style={ {fontWeight: 'bold'} }>ICML 2019</span>, selected for a long talk <br />
        [<a href='https://arxiv.org/abs/1905.06394'>arXiv</a>] [<a href='http://proceedings.mlr.press/v97/yasuda19a.html'>proceedings</a>] [<a href='/docs/posters/fwy19.pdf'>poster</a>] [<a href='/docs/slides/fwy19.pdf'>slides</a>] <br />
      </li>
      </ul>
    </div>

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
