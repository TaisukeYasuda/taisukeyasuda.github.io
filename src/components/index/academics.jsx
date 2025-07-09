import React, { useState } from 'react';

const sectionHeaderStyle = {
  width: '100%',
  textAlign: 'right',
  borderBottom: '1px solid #ddd',
  lineHeight: '0.1em',
  margin: '10px 0 20px',
  color: '#999'
}

const Pitch = ({ pitch }) => (
  <span style={{ color: "green" }}>Summary: {pitch}</span>
)

const SectionHeader = ({ section }) => (
  <h4 style={sectionHeaderStyle}>
    <span style={{ background: '#fff', padding: '0 10px' }}>{section}</span>
  </h4>
)

const PubVenue = ({ name }) => (<span style={{ fontWeight: 'bold' }}>{name}</span>)
const PubInSubmission = () => (<span style={{ fontWeight: 'bold' }}>In submission</span>)
const PubTitle = ({ title, bib }) => (
  <span><span style={{ fontSize: '17px' }}>{title}</span> {bib == undefined ? '' : <span>[<a href={bib}>bib</a>]</span>}</span>
)
const PubSpecial = ({ name }) => (<span style={{ fontWeight: 'bold', color: 'red' }}>{name}</span>)
const PubSection = ({ name }) => (<span style={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</span>)

// 

const WY2025 = () => (
  <li>
    <PubTitle title='Root Ridge Leverage Score Sampling for $\ell_p$ Subspace Approximation' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='FOCS 2025' /><br />
    [<a href='https://arxiv.org/abs/2407.03262'>arXiv</a>] [<a href='/docs/slides/wy25.pdf'>slides</a>]<br />
    <br />
    <Pitch pitch="Smaller coresets for $\ell_p$ subspace approximation using ridge leverage score sampling" /><br />
  </li>
)

const CJWY2025 = () => (
  <li>
    <PubTitle title='Streaming Algorithms for $\ell_p$ Flows and $\ell_p$ Regression' /> <br />
    (with Amit Chakrabarti, Jeffrey Jiang, and David P. Woodruff) <br />
    <PubVenue name='ICLR 2025' />, selected for spotlight presentation<br />
    [<a href='https://openreview.net/forum?id=Kpjvm2mB0K'>proceedings</a>] [<a href='/docs/posters/cjwy25.pdf'>poster</a>]<br />
    <br />
    <Pitch pitch="Streaming algorithms and lower bounds for underdetermined $\ell_p$ regression" /><br />
  </li>
)

const WY2024d = () => (
  <li>
    <PubTitle title='John Ellipsoids via Lazy Updates' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='NeurIPS 2024' /><br />
    [<a href='https://arxiv.org/abs/2501.01801'>arXiv</a>] [<a href='https://openreview.net/forum?id=lCj0Rvr4D6'>proceedings</a>]<br />
    <br />
    <Pitch pitch="Faster algorithms for approximating John ellipsoids" /><br />
  </li>
)

const WY2024b = () => (
  <li>
    <PubTitle title='Coresets for Multiple $\ell_p$ Regression' bib='https://dblp.org/rec/conf/icml/Woodruff024a.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='ICML 2024' /><br />
    [<a href='https://arxiv.org/abs/2406.02432'>arXiv</a>] [<a href='https://openreview.net/forum?id=4UWjqrMmFp'>proceedings</a>] [<a href='https://www.youtube.com/watch?v=8lbYjHIkhBo'>talk @ ICML</a>, <a href='/docs/slides/wy24_icml.pdf'>slides</a>] [<a href='/docs/posters/wy24b.pdf'>poster</a>]<br />
    <br />
    <Pitch pitch="Nearly optimal coresets for multiple $\ell_p$ regression and nearly optimal sublinear power means" /><br />
  </li>
)

const WY2024a = () => (
  <li>
    <PubTitle title='Reweighted Solutions for Weighted Low Rank Approximation' bib='https://dblp.org/rec/conf/icml/Woodruff024.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='ICML 2024' /><br />
    [<a href='https://arxiv.org/abs/2406.02431'>arXiv</a>] [<a href='https://openreview.net/forum?id=r9XICONppE'>proceedings</a>] [<a href='/docs/posters/wy24a.pdf'>poster</a>]<br />
    <br />
    <Pitch pitch="A simple algorithm for weighted low rank approximation based on reweighting" /><br />
  </li>
)

const YAFBM2024 = () => (
  <li>
    <PubTitle title='SequentialAttention++ for Block Sparsification: Differentiable Pruning Meets Combinatorial Optimization' /> <br />
    (with Kyriakos Axiotis, Gang Fu, MohammadHossein Bateni, and Vahab Mirrokni) <br />
    <PubVenue name='NeurIPS 2024' /><br />
    [<a href='https://arxiv.org/abs/2402.17902'>arXiv</a>] [<a href='https://openreview.net/forum?id=BrPZMOQiSN'>proceedings</a>]<br />
    <br />
    <Pitch pitch="Combining differentiable pruning and combinatorial optimization for neural network pruning" /><br />
  </li>
)

const DDWY2023 = () => (
  <li>
    <PubTitle title='Sketching Algorithms for Sparse Dictionary Learning: PTAS and Turnstile Streaming' bib='https://dblp.org/rec/conf/nips/DexterDW023.html?view=bibtex' /> <br />
    (with Gregory Dexter, Petros Drineas, and David P. Woodruff) <br />
    <PubVenue name='NeurIPS 2023' /><br />
    [<a href='https://arxiv.org/abs/2310.19068'>arXiv</a>] [<a href='https://openreview.net/forum?id=qHzEFxtheD'>proceedings</a>]<br />
    <br />
    <Pitch pitch="Sketching algorithms for dictionary learning and clustering" /><br />
  </li>
)

const AY2023 = () => (
  <li>
    <PubTitle title='Performance of $\ell_1$ Regularization for Sparse Convex Optimization' /> <br />
    (with Kyriakos Axiotis) <br />
    <PubInSubmission /><br />
    [<a href='https://arxiv.org/abs/2307.07405'>arXiv</a>]<br />
    <br />
    <Pitch pitch="Approximation guarantees for the Group LASSO for sparse convex optimization" /><br />
  </li>
)

const WY2023c = () => (
  <li>
    <PubTitle title='Sharper Bounds for $\ell_p$ Sensitivity Sampling' bib='https://dblp.org/rec/conf/icml/WoodruffY23.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='ICML 2023' />, selected for short live presentation<br />
    [<a href='https://arxiv.org/abs/2306.00732'>arXiv</a>] [<a href='https://proceedings.mlr.press/v202/woodruff23a.html'>proceedings</a>] [<a href='/docs/slides/wy23_icml.pdf'>slides</a>] [<a href='/docs/posters/wy23.pdf'>poster</a>]<br />
    <br />
    <Pitch pitch="Guarantees for sensitivity sampling beyond a naive union bound" /><br />
  </li>
)

const WY2023b = () => (
  <li>
    <PubTitle title='New Subset Selection Algorithms for Low Rank Approximation: Offline and Online' bib='https://dblp.org/rec/conf/stoc/Woodruff023.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='STOC 2023' /> <br />
    [<a href='https://arxiv.org/abs/2304.09217'>arXiv</a>] [<a href='https://doi.org/10.1145/3564246.3585100'>proceedings</a>] [<a href='https://www.youtube.com/watch?v=tGevj9gvPO8'>talk @ STOC</a>, <a href='/docs/slides/wy23_stoc.pdf'>slides</a>]<br />
    <br />
    <Pitch pitch="Well-conditioned spanning sets for improved low rank approximation and $\ell_p$ subspace embeddings" /><br />
  </li>
)

const YBCFFM2023 = () => (
  <li>
    <PubTitle title='Sequential Attention for Feature Selection' bib='https://dblp.org/rec/conf/iclr/00020CFFM23.html?view=bibtex' /> <br />
    (with MohammadHossein Bateni, Lin Chen, Matthew Fahrbach, Gang Fu, and Vahab Mirrokni) <br />
    <PubVenue name='ICLR 2023' /> <br />
    [<a href='https://arxiv.org/abs/2209.14881'>arXiv</a>] [<a href='https://openreview.net/forum?id=TTLLGx3eet'>proceedings</a>] [<a href='/docs/posters/ybcffm23.pdf'>poster</a>] [<a href='https://ai.googleblog.com/2023/02/google-research-2022-beyond-algorithms.html'>Google Research blog</a>] [<a href='https://github.com/google-research/google-research/tree/master/sequential_attention'>code</a>]<br />
    <br />
    <Pitch pitch="A sequential variation on the attention mechanism for feature selection with provable guarantees" /><br />
  </li>
)

const WY2023a = () => (
  <li>
    <PubTitle title='Online Lewis Weight Sampling' bib='https://dblp.org/rec/conf/soda/Woodruff023.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='SODA 2023' /> <br />
    <PubSpecial name='Invited to the special issue for SODA 2023' /><br />
    [<a href='https://arxiv.org/abs/2207.08268'>arXiv</a>] [<a href='https://doi.org/10.1137/1.9781611977554.ch175'>proceedings</a>] [<a href='https://doi.org/10.1145/3715127'>TALG</a>] [<a href='/docs/slides/wy23_soda.pdf'>slides</a>]<br />
    <br />
    <Pitch pitch="Optimal $\ell_p$ subspace embeddings in the online model and sliding windows" /><br />
  </li>
)

const WY2022b = () => (
  <li>
    <PubTitle title='High-Dimensional Geometric Streaming in Polynomial Space' bib='https://dblp.org/rec/conf/focs/Woodruff022.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='FOCS 2022' /> <br />
    [<a href='https://arxiv.org/abs/2204.03790'>arXiv</a>] [<a href='https://doi.org/10.1109/FOCS54457.2022.00075'>proceedings</a>] [<a href='https://vimeo.com/user39621409/review/771281672/15ad8440d8#t=46m17s'>talk @ FOCS</a>, <a href='/docs/slides/wy22_focs.pdf'>slides</a>]<br />
    <br />
    <Pitch pitch="Using online numerical linear algebra to solve geometric streaming problems in $\poly(d)$ space" /><br />
  </li>
)

const MMWY2022 = () => (
  <li>
    <PubTitle title='Active Linear Regression for $\ell_p$ Norms and Beyond' bib='https://dblp.org/rec/conf/focs/MuscoMW022.html?view=bibtex' /> <br />
    (with Cameron Musco, Christopher Musco, and David P. Woodruff) <br />
    <PubVenue name='FOCS 2022' /> <br />
    [<a href='https://arxiv.org/abs/2111.04888'>arXiv</a>] [<a href='https://doi.org/10.1109/FOCS54457.2022.00076'>proceedings</a>] [<a href='https://vimeo.com/user39621409/review/771281672/15ad8440d8#t=1h4m37s'>talk @ FOCS</a>, <a href='/docs/slides/mmwy22_focs.pdf'>slides</a>] [<a href='https://www.youtube.com/watch?v=yWSgcyPgrSQ&ab_channel=SimonsInstitute'>David's talk @ Simons Institute</a>]<br />
    <br />
    <Pitch pitch="Optimal active $\ell_p$ regression, and sensitivity bounds for $M$-estimators beyond Löwner-John ellipsoids" /><br />
  </li>
)

const WY2022a = () => (
  <li>
    <PubTitle title='Improved Algorithms for Low Rank Approximation from Sparsity' bib='https://dblp.org/rec/conf/soda/WoodruffY22.html?view=bibtex' /> <br />
    (with David P. Woodruff) <br />
    <PubVenue name='SODA 2022' /> <br />
    [<a href='https://arxiv.org/abs/2111.00668'>arXiv</a>] [<a href='https://doi.org/10.1137/1.9781611977073.95'>proceedings</a>] [<a href='https://www.youtube.com/watch?v=fdayFa-xZTc'>talk @ SODA</a>, <a href='/docs/slides/wy22.pdf'>slides</a>] <br />
    <br />
    <Pitch pitch={String.raw`Spectral low rank approximation in $\frac{\nnz(A)}{\sqrt\eps}$ time instead of $\frac{\nnz(A)}{\sqrt\eps}k$ when singular vectors are sparse`} />
  </li>
)

const LWY2021 = () => (
  <li>
    <PubTitle title='Exponentially Improved Dimensionality Reduction for $\ell_1$: Subspace Embeddings and Independence Testing' bib='https://dblp.org/rec/conf/colt/LiW021.html?view=bibtex' /> <br />
    (with Yi Li and David P. Woodruff) <br />
    <PubVenue name='COLT 2021' /> <br />
    [<a href='https://arxiv.org/abs/2104.12946'>arXiv</a>] [<a href='http://proceedings.mlr.press/v134/li21c.html'>proceedings</a>] [<a href='/docs/posters/lwy21.pdf'>poster</a>] [<a href='https://www.youtube.com/watch?v=c7TrpsmxoMY'>long talk @ CMU</a>, <a href='/docs/slides/lwy21.pdf'>slides</a>] [<a href='http://www.learningtheory.org/colt2021/virtual/poster_1322.html'>talk @ COLT</a>, <a href='/docs/slides/lwy21_colt.pdf'>slides</a>] <br />
    <br />
    <Pitch pitch={String.raw`Improving oblivious linear embeddings of $d$-dim subspaces of $\ell_1^n$ into $\ell_1^r$, from $r = 2^{2^d}$ to $r = 2^d$`} />
  </li>
)

const FWY2020 = () => (
  <li>
    <PubTitle title='Graph Spanners in the Message-Passing Model' bib='https://dblp.org/rec/bibtex/conf/innovations/FernandezW020' /> <br />
    (with Manuel Fernández V and David P. Woodruff) <br />
    <PubVenue name='ITCS 2020' /> <br />
    [<a href='https://arxiv.org/abs/1911.05991'>arXiv</a>] [<a href='https://doi.org/10.4230/LIPIcs.ITCS.2020.77'>proceedings</a>]<br />
  </li>
)

const ATWY2019 = () => (
  <li>
    <PubTitle title='The Nonlinear Stability Regime of the Viscous Faraday Wave Problem' /> <br />
    (with David Altizio, Ian Tice, and Xinyu Wu) <br />
    <PubVenue name='Quart. Appl. Math.' /> <br />
    [<a href='https://arxiv.org/abs/1905.04747'>arXiv</a>] [<a href='https://doi.org/10.1090/qam/1562'>journal</a>]<br />
  </li>
)

const FWY2019b = () => (
  <li>
    <PubTitle title='The Query Complexity of Mastermind with $\ell_p$ Distances' bib='https://dblp.org/rec/bibtex/conf/approx/FernandezW019' /> <br />
    (with Manuel Fernández V and David P. Woodruff) <br />
    <PubVenue name='APPROX 2019' /> <br />
    [<a href='https://arxiv.org/abs/1909.10668'>arXiv</a>] [<a href='http://dx.doi.org/10.4230/LIPIcs.APPROX-RANDOM.2019.1'>proceedings</a>] <br />
  </li>
)

const FWY2019a = () => (
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
)

const ResearchAll = () => (
  <div className="research">
    <SectionHeader section={'Preprints'} />
    <ul>
      <AY2023 />
    </ul>

    <SectionHeader section={2025} />
    <ul>
      <WY2025 /><br />
      <CJWY2025 />
    </ul>

    <SectionHeader section={2024} />
    <ul>
      <YAFBM2024 /><br />
      <WY2024d /><br />
      <WY2024b /><br />
      <WY2024a />
    </ul>

    <SectionHeader section={2023} />
    <ul>
      <DDWY2023 /><br />
      <WY2023c /><br />
      <WY2023b /><br />
      <YBCFFM2023 /><br />
      <WY2023a />
    </ul>

    <SectionHeader section={2022} />
    <ul>
      <WY2022b /><br />
      <MMWY2022 /><br />
      <WY2022a />
    </ul>

    <SectionHeader section={2021} />
    <ul>
      <LWY2021 />
    </ul>

    <SectionHeader section={2020} />
    <ul>
      <FWY2020 />
    </ul>

    <SectionHeader section={2019} />
    <ul>
      <ATWY2019 /><br />
      <FWY2019b /><br />
      <FWY2019a />
    </ul>
  </div>
);

const ResearchSelected = () => (
  <div className="research">
    <SectionHeader section={'Selected'} />
    <ul>
      <WY2025 /><br />
      <WY2023b /><br />
      <WY2023a /><br />
      <WY2022b /><br />
      <MMWY2022 />
    </ul>
  </div>
);

const Theses = () => (
  <div>
    <h3>Theses</h3>
    <PubTitle title='Algorithms for Matrix Approximation: Sketching, Sampling, and Sparse Optimization' /><br />
    <span style={{ fontWeight: 'bold' }}>PhD Thesis, Computer Science, May 2024</span><br />
    Committee: <a href='https://www.cs.cmu.edu/~dwoodruf/'>David Woodruff</a> (Chair), <a href='https://cs.nyu.edu/~anupamg/'>Anupam Gupta</a>, <a href='https://www.cs.cmu.edu/~yangp/'>Richard Peng</a>, <a href='https://people.cs.umass.edu/~cmusco/'>Cameron Musco</a><br />
    [<a href='/docs/phd-thesis/phd-thesis.pdf'>pdf</a>] [<a href='/docs/phd-thesis/slides.pdf'>slides</a>] [<a href='http://reports-archive.adm.cs.cmu.edu/anon/anon/usr/ftp/home/ftp/2024/abstracts/24-110.html'>CMU</a>]<br />

    <br />

    <PubTitle title='Asymptotic Stability of the Faraday Wave Problem' /><br />
    <span style={{ fontWeight: 'bold' }}>MS Thesis, Mathematical Sciences, May 2019</span><br />
    Committee: <a href='https://www.math.cmu.edu/~iantice/'>Ian Tice</a> (Chair), <a href='http://giovannileoni.weebly.com/'>Giovanni Leoni</a>, <a href='https://sites.google.com/berkeley.edu/fweber'>Franziska Weber</a><br />
    [<a href='/docs/ms-thesis/ms-thesis.pdf'>pdf</a>] [<a href='/docs/ms-thesis/slides.pdf'>slides</a>]
  </div>
);

const Teaching = () => (
  <div>
    <h3>Teaching</h3>
    <table style={{ width: '100%' }}>
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
  </div>
);

const Academics = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="academics" className="docs-section">
      <div className={showAll ? undefined : "hidden"}>
        <PubSection name="All papers" /> [<a onClick={() => setShowAll(false)}>show selected papers</a>]
        <ResearchAll />
      </div>
      <div className={showAll ? "hidden" : undefined}>
        <PubSection name="Selected papers" /> [<a onClick={() => setShowAll(true)}>show all papers</a>]
        <ResearchSelected />
      </div>
      <Theses />
      <Teaching />
    </section>
  );
}

export default Academics;
