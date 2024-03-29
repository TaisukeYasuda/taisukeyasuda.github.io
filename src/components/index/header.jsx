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
        <h1 style={ {fontWeight: 'lighter', fontSize: '3em'} }><span style={ {fontWeight: 'bold'} }>Taisuke</span> Yasuda</h1>
        <p>
          I am a 4th year PhD student in the <a href='http://theory.cs.cmu.edu/'>CS Theory Group</a> at <a href='https://csd.cmu.edu/'>Carnegie Mellon University</a>, advised by <a href='https://www.cs.cmu.edu/~dwoodruf/'>David Woodruff</a>. My research interests are in theoretical computer science, with a focus on linear algebra, geometry, statistics, and machine learning.
        </p>
        <p>
          Previously, I was a Research Intern in the <a href='https://research.google/teams/algorithms-optimization/'>Algorithms and Optimization Group</a> at Google Research and a Junior Quantitative Trader at <a href='https://akunacapital.com'>Akuna Capital</a>. 
        </p>
        <div className="social-links">
          <span style={ bold }>Contact:</span>&emsp; taisukey@cs.cmu.edu
        </div>
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
