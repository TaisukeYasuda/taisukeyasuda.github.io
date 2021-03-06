import * as React from 'react';

const sectionHeaderStyle = {
  width: '100%',
  textAlign: 'right',
  borderBottom: '1px solid #eee',
  lineHeight: '0.1em',
  margin: '10px 0 20px',
  color: '#999'
}

const SectionHeader = ({ section }) => (
  <h4 style={ sectionHeaderStyle }>
    <span style={ {background: '#fff', padding: '0 10px'} }>{section}</span>
  </h4>
)

const PubVenue = ({ name }) => (<span style={ {fontWeight: 'bold'} }>{name}</span>)
const PubTitle = ({ title, bib }) => (
  <span><span style={ {fontStyle: 'italic'} }>{title}</span> { bib == undefined ? '' : <span>[<a href={bib}>bib</a>]</span> }</span>
)

const Academics = () => (
  <section id="academics" className="docs-section">
    <h3>Research</h3>
    <div className="research">
      <SectionHeader section={2020} />
      <ul>
      <li>
        <PubTitle title='Graph Spanners in the Message-Passing Model' bib='https://dblp.org/rec/bibtex/conf/innovations/FernandezW020' /> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <PubVenue name='ITCS 2020' /> <br />
        [<a href='https://arxiv.org/abs/1911.05991'>arXiv</a>] [<a href='https://doi.org/10.4230/LIPIcs.ITCS.2020.77'>proceedings</a>]<br />
      </li>
      </ul>

      <SectionHeader section={2019} />
      <ul>
      <li>
        <PubTitle title='The Nonlinear Stability Regime of the Viscous Faraday Wave Problem' /> <br />
        (with David Altizio, Ian Tice, and Xinyu Wu) <br />
        <PubVenue name='Quart. Appl. Math.' /> <br />
        [<a href='https://arxiv.org/abs/1905.04747'>arXiv</a>] [<a href='https://doi.org/10.1090/qam/1562'>journal</a>] [<a href='/docs/ms-thesis/ms-thesis.pdf'>master's thesis</a>] [<a href='/docs/ms-thesis/slides.pdf'>defense slides</a>] <br /><br />
      </li>
      <li>
        <PubTitle title='The Query Complexity of Mastermind with $\ell_p$ Distances' bib='https://dblp.org/rec/bibtex/conf/approx/FernandezW019' /> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <PubVenue name='APPROX 2019' /> <br />
        [<a href='https://arxiv.org/abs/1909.10668'>arXiv</a>] [<a href='http://dx.doi.org/10.4230/LIPIcs.APPROX-RANDOM.2019.1'>proceedings</a>] <br /> <br />
      </li>
      <li>
        <span style={ {fontStyle: 'italic'} }>Tight Kernel Query Complexity of Kernel Ridge Regression and Kernel $k$-means Clustering</span> [<a href='https://dblp.org/rec/bibtex/conf/icml/0002WF19'>bib</a>] <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <PubVenue name='ICML 2019' />, selected for a long talk <br />
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
