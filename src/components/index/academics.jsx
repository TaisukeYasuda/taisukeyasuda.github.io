import * as React from 'react';

const sectionHeaderStyle = {
  width: '100%',
  textAlign: 'right',
  borderBottom: '1px solid #ddd',
  lineHeight: '0.1em',
  margin: '10px 0 20px',
  color: '#999'
}

const Pitch = ({ pitch }) => (
  <span style={ {color: "green"} }>Summary: {pitch}</span>
)

const SectionHeader = ({ section }) => (
  <h4 style={ sectionHeaderStyle }>
    <span style={ {background: '#fff', padding: '0 10px'} }>{section}</span>
  </h4>
)

const PubVenue = ({ name }) => (<span style={ {fontWeight: 'bold'} }>{name}</span>)
const PubInSubmission = () => (<span style={ {fontWeight: 'bold'} }>In submission</span>)
const PubTitle = ({ title, bib }) => (
  <span><span style={ { fontSize: '17px'} }>{title}</span> { bib == undefined ? '' : <span>[<a href={bib}>bib</a>]</span> }</span>
)

// 

const Academics = () => (
  <section id="academics" className="docs-section">
    <h3>Research</h3>
    <div className="research">
      {/*<SectionHeader section={'Preprints'} />
      <ul>
      </ul>*/}
      
      <SectionHeader section={2022} />
      <ul>
      <li>
        <PubTitle title='High-Dimensional Geometric Streaming in Polynomial Space' /> <br />
        (with David P. Woodruff) <br />
        <PubVenue name='FOCS 2022' /> <br />
        [<a href='https://arxiv.org/abs/2204.03790'>arXiv</a>]<br />
        <br />
        <Pitch pitch="Using online numerical linear algebra to solve geometric streaming problems in $\poly(d)$ space." /><br /><br />
      </li>
      <li>
        <PubTitle title='Active Linear Regression for $\ell_p$ Norms and Beyond' /> <br />
        (with Cameron Musco, Christopher Musco, and David P. Woodruff) <br />
        <PubVenue name='FOCS 2022' /> <br />
        [<a href='https://arxiv.org/abs/2111.04888'>arXiv</a>]<br />
        <br />
        <Pitch pitch="Optimal active $\ell_p$ regression, and sensitivity bounds for $M$-estimators beyond Löwner-John ellipsoids." /><br /><br />
      </li>
      <li>
        <PubTitle title='Improved Algorithms for Low Rank Approximation from Sparsity' bib='https://dblp.org/rec/conf/soda/WoodruffY22.html?view=bibtex' /> <br />
        (with David P. Woodruff) <br />
        <PubVenue name='SODA 2022' /> <br />
        [<a href='https://arxiv.org/abs/2111.00668'>arXiv</a>] [<a href='https://doi.org/10.1137/1.9781611977073.95'>proceedings</a>] [<a href='https://www.youtube.com/watch?v=fdayFa-xZTc'>talk @ SODA</a>, <a href='/docs/slides/wy22.pdf'>slides</a>] <br />
        <br />
        <Pitch pitch={String.raw`If top $k$ singular vectors are sparse, then low rank approximation is $\frac{\nnz(A)}{\sqrt\eps}$ time instead of $\frac{\nnz(A)}{\sqrt\eps}k$.`} />
      </li>
      </ul>

      <SectionHeader section={2021} />
      <ul>
      <li>
        <PubTitle title='Exponentially Improved Dimensionality Reduction for $\ell_1$: Subspace Embeddings and Independence Testing' bib='https://dblp.org/rec/conf/colt/LiW021.html?view=bibtex' /> <br />
        (with Yi Li and David P. Woodruff) <br />
        <PubVenue name='COLT 2021' /> <br />
        [<a href='https://arxiv.org/abs/2104.12946'>arXiv</a>] [<a href='http://proceedings.mlr.press/v134/li21c.html'>proceedings</a>] [<a href='/docs/posters/lwy21.pdf'>poster</a>] [<a href='https://www.youtube.com/watch?v=c7TrpsmxoMY'>long talk @ CMU</a>, <a href='/docs/slides/lwy21.pdf'>slides</a>] [<a href='http://www.learningtheory.org/colt2021/virtual/poster_1322.html'>talk @ COLT</a>, <a href='/docs/slides/lwy21_colt.pdf'>slides</a>] <br />
        <br />
        <Pitch pitch={String.raw`Improving oblivious linear embeddings of $d$-dim subspaces of $\ell_1^n$ into $\ell_1^r$, from $r = 2^{2^d}$ to $r = 2^d$.`} />
      </li>
      </ul>

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
        <PubTitle title='Tight Kernel Query Complexity of Kernel Ridge Regression and Kernel $k$-means Clustering' bib='https://dblp.org/rec/bibtex/conf/icml/0002WF19' /> <br />
        (with Manuel Fernández V and David P. Woodruff) <br />
        <PubVenue name='ICML 2019' />, selected for a long talk <br />
        [<a href='https://arxiv.org/abs/1905.06394'>arXiv</a>] [<a href='http://proceedings.mlr.press/v97/yasuda19a.html'>proceedings</a>] [<a href='/docs/posters/fwy19.pdf'>poster</a>] [<a href='https://slideslive.com/38917909/optimization-and-graphical-models?t=0'>talk @ ICML</a>, <a href='/docs/slides/fwy19.pdf'>slides</a>] <br />
        {/*
        <br />
        <Pitch pitch="Optimal lower bounds on # of kernel evaluations for kernel ridge regression and $k$-means clustering." /> 
        */}
        <br /><br />
      </li>
      </ul>
    </div>

    <h3>Teaching</h3>
    <table style={ {width: '100%'} }>
      <tbody>
      <tr>
          <td><a href="http://www.cs.cmu.edu/~dwoodruf/teaching/15859-fall21/">15-859 Algorithms for Big Data</a> (TA)</td>
          <td>Fall 2021</td>
        </tr>
        <tr>
          <td><a href="https://www.cs.cmu.edu/~harchol/PnC/class.html">15-259 Probability and Computing</a> (TA)</td>
          <td>Spring 2021</td>
        </tr>
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
