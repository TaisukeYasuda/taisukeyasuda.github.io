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
          I am a second year PhD student in the <a href='http://theory.cs.cmu.edu/'>Theory Group</a> in the Computer Science Department at Carnegie Mellon University. I am extremely fortunate to be advised by <a href='https://www.cs.cmu.edu/~dwoodruf/'>David Woodruff</a>. I am broadly interested in theoretical computer science, especially in algorithmic problems from numerical linear algebra, optimization, and machine learning.
        </p>
        <p>
          I am also currently a Student Researcher at Google Research NYC in the <a href='https://research.google/teams/algorithms-optimization/'>Algorithms and Optimization Group</a>. Previously, I was a Junior Quantitative Trader at <a href='https://akunacapital.com'>Akuna Capital</a>. 
        </p>
        <p>
        <a href='https://scholar.google.com/citations?user=c62WqiEAAAAJ&hl=en&sortby=pubdate'><i class="ai ai-google-scholar-square ai-2x"></i></a> &emsp;
        <a href='https://dblp.org/pid/177/9741-2.html'><i class="ai ai-dblp ai-2x"></i></a> &emsp;
        <a href='https://arxiv.org/a/yasuda_t_2.html'><i class="ai ai-arxiv ai-2x"></i></a> &emsp;
        <a href='/docs/cv.pdf'><i class="ai ai-cv-square ai-2x"></i></a> 
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
