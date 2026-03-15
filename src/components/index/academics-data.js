const link = (href, label) => ({ href, label });
const text = (value) => ({ text: value });

export const PUBLICATIONS = {
  AY2023: {
    title: String.raw`Performance of $\ell_1$ Regularization for Sparse Convex Optimization`,
    authors: '(with Kyriakos Axiotis)',
    status: 'In submission',
    resourceGroups: [[link('https://arxiv.org/abs/2307.07405', 'arXiv')]],
    pitch: 'Approximation guarantees for the Group LASSO for sparse convex optimization',
  },
  WY2025: {
    title: String.raw`Root Ridge Leverage Score Sampling for $\ell_p$ Subspace Approximation`,
    authors: '(with David P. Woodruff)',
    venue: 'FOCS 2025',
    resourceGroups: [
      [link('https://arxiv.org/abs/2407.03262', 'arXiv')],
      [link('https://doi.org/10.1109/FOCS63196.2025.00119', 'proceedings')],
      [link('/docs/slides/wy25_focs.pdf', "David's slides @ FOCS")],
    ],
    pitch: String.raw`Smaller coresets for $\ell_p$ subspace approximation using ridge leverage score sampling`,
  },
  CJWY2025: {
    title: String.raw`Streaming Algorithms for $\ell_p$ Flows and $\ell_p$ Regression`,
    authors: '(with Amit Chakrabarti, Jeffrey Jiang, and David P. Woodruff)',
    venue: 'ICLR 2025',
    venueNote: ', selected for spotlight presentation',
    resourceGroups: [
      [link('https://openreview.net/forum?id=Kpjvm2mB0K', 'proceedings')],
      [link('/docs/posters/cjwy25.pdf', 'poster')],
    ],
    pitch: String.raw`Streaming algorithms and lower bounds for underdetermined $\ell_p$ regression`,
  },
  YAFBM2024: {
    title: 'SequentialAttention++ for Block Sparsification: Differentiable Pruning Meets Combinatorial Optimization',
    authors: '(with Kyriakos Axiotis, Gang Fu, MohammadHossein Bateni, and Vahab Mirrokni)',
    venue: 'NeurIPS 2024',
    resourceGroups: [
      [link('https://arxiv.org/abs/2402.17902', 'arXiv')],
      [link('https://openreview.net/forum?id=BrPZMOQiSN', 'proceedings')],
    ],
    pitch: 'Combining differentiable pruning and combinatorial optimization for neural network pruning',
  },
  WY2024d: {
    title: 'John Ellipsoids via Lazy Updates',
    authors: '(with David P. Woodruff)',
    venue: 'NeurIPS 2024',
    resourceGroups: [
      [link('https://arxiv.org/abs/2501.01801', 'arXiv')],
      [link('https://openreview.net/forum?id=lCj0Rvr4D6', 'proceedings')],
    ],
    pitch: 'Faster algorithms for approximating John ellipsoids',
  },
  WY2024b: {
    title: String.raw`Coresets for Multiple $\ell_p$ Regression`,
    bib: 'https://dblp.org/rec/conf/icml/Woodruff024a.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'ICML 2024',
    resourceGroups: [
      [link('https://arxiv.org/abs/2406.02432', 'arXiv')],
      [link('https://openreview.net/forum?id=4UWjqrMmFp', 'proceedings')],
      [
        link('https://www.youtube.com/watch?v=8lbYjHIkhBo', 'talk @ ICML'),
        text(', '),
        link('/docs/slides/wy24_icml.pdf', 'slides'),
      ],
      [link('/docs/posters/wy24b.pdf', 'poster')],
    ],
    pitch: String.raw`Nearly optimal coresets for multiple $\ell_p$ regression and nearly optimal sublinear power means`,
  },
  WY2024a: {
    title: 'Reweighted Solutions for Weighted Low Rank Approximation',
    bib: 'https://dblp.org/rec/conf/icml/Woodruff024.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'ICML 2024',
    resourceGroups: [
      [link('https://arxiv.org/abs/2406.02431', 'arXiv')],
      [link('https://openreview.net/forum?id=r9XICONppE', 'proceedings')],
      [link('/docs/posters/wy24a.pdf', 'poster')],
    ],
    pitch: 'A simple algorithm for weighted low rank approximation based on reweighting',
  },
  DDWY2023: {
    title: 'Sketching Algorithms for Sparse Dictionary Learning: PTAS and Turnstile Streaming',
    bib: 'https://dblp.org/rec/conf/nips/DexterDW023.html?view=bibtex',
    authors: '(with Gregory Dexter, Petros Drineas, and David P. Woodruff)',
    venue: 'NeurIPS 2023',
    resourceGroups: [
      [link('https://arxiv.org/abs/2310.19068', 'arXiv')],
      [link('https://openreview.net/forum?id=qHzEFxtheD', 'proceedings')],
    ],
    pitch: 'Sketching algorithms for dictionary learning and clustering',
  },
  WY2023c: {
    title: String.raw`Sharper Bounds for $\ell_p$ Sensitivity Sampling`,
    bib: 'https://dblp.org/rec/conf/icml/WoodruffY23.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'ICML 2023',
    venueNote: ', selected for short live presentation',
    resourceGroups: [
      [link('https://arxiv.org/abs/2306.00732', 'arXiv')],
      [link('https://proceedings.mlr.press/v202/woodruff23a.html', 'proceedings')],
      [link('/docs/slides/wy23_icml.pdf', 'slides')],
      [link('/docs/posters/wy23.pdf', 'poster')],
    ],
    pitch: String.raw`Guarantees for sensitivity sampling beyond a naive union bound`,
  },
  WY2023b: {
    title: 'New Subset Selection Algorithms for Low Rank Approximation: Offline and Online',
    bib: 'https://dblp.org/rec/conf/stoc/Woodruff023.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'STOC 2023',
    resourceGroups: [
      [link('https://arxiv.org/abs/2304.09217', 'arXiv')],
      [link('https://doi.org/10.1145/3564246.3585100', 'proceedings')],
      [
        link('https://www.youtube.com/watch?v=tGevj9gvPO8', 'talk @ STOC'),
        text(', '),
        link('/docs/slides/wy23_stoc.pdf', 'slides'),
      ],
    ],
    pitch: String.raw`Well-conditioned spanning sets for improved low rank approximation and $\ell_p$ subspace embeddings`,
  },
  YBCFFM2023: {
    title: 'Sequential Attention for Feature Selection',
    bib: 'https://dblp.org/rec/conf/iclr/00020CFFM23.html?view=bibtex',
    authors: '(with MohammadHossein Bateni, Lin Chen, Matthew Fahrbach, Gang Fu, and Vahab Mirrokni)',
    venue: 'ICLR 2023',
    resourceGroups: [
      [link('https://arxiv.org/abs/2209.14881', 'arXiv')],
      [link('https://openreview.net/forum?id=TTLLGx3eet', 'proceedings')],
      [link('/docs/posters/ybcffm23.pdf', 'poster')],
      [link('https://ai.googleblog.com/2023/02/google-research-2022-beyond-algorithms.html', 'Google Research blog')],
      [link('https://github.com/google-research/google-research/tree/master/sequential_attention', 'code')],
    ],
    pitch: 'A sequential variation on the attention mechanism for feature selection with provable guarantees',
  },
  WY2023a: {
    title: 'Online Lewis Weight Sampling',
    bib: 'https://dblp.org/rec/conf/soda/Woodruff023.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'SODA 2023',
    special: 'Invited to the special issue for SODA 2023',
    resourceGroups: [
      [link('https://arxiv.org/abs/2207.08268', 'arXiv')],
      [link('https://doi.org/10.1137/1.9781611977554.ch175', 'proceedings')],
      [link('https://doi.org/10.1145/3715127', 'TALG')],
      [link('/docs/slides/wy23_soda.pdf', 'slides')],
    ],
    pitch: String.raw`Optimal $\ell_p$ subspace embeddings in the online model and sliding windows`,
  },
  WY2022b: {
    title: 'High-Dimensional Geometric Streaming in Polynomial Space',
    bib: 'https://dblp.org/rec/conf/focs/Woodruff022.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'FOCS 2022',
    resourceGroups: [
      [link('https://arxiv.org/abs/2204.03790', 'arXiv')],
      [link('https://doi.org/10.1109/FOCS54457.2022.00075', 'proceedings')],
      [
        link('https://vimeo.com/user39621409/review/771281672/15ad8440d8#t=46m17s', 'talk @ FOCS'),
        text(', '),
        link('/docs/slides/wy22_focs.pdf', 'slides'),
      ],
    ],
    pitch: String.raw`Using online numerical linear algebra to solve geometric streaming problems in $\poly(d)$ space`,
  },
  MMWY2022: {
    title: String.raw`Active Linear Regression for $\ell_p$ Norms and Beyond`,
    bib: 'https://dblp.org/rec/conf/focs/MuscoMW022.html?view=bibtex',
    authors: '(with Cameron Musco, Christopher Musco, and David P. Woodruff)',
    venue: 'FOCS 2022',
    resourceGroups: [
      [link('https://arxiv.org/abs/2111.04888', 'arXiv')],
      [link('https://doi.org/10.1109/FOCS54457.2022.00076', 'proceedings')],
      [
        link('https://vimeo.com/user39621409/review/771281672/15ad8440d8#t=1h4m37s', 'talk @ FOCS'),
        text(', '),
        link('/docs/slides/mmwy22_focs.pdf', 'slides'),
      ],
      [link('https://www.youtube.com/watch?v=yWSgcyPgrSQ&ab_channel=SimonsInstitute', "David's talk @ Simons Institute")],
    ],
    pitch: String.raw`Optimal active $\ell_p$ regression, and sensitivity bounds for $M$-estimators beyond Löwner-John ellipsoids`,
  },
  WY2022a: {
    title: 'Improved Algorithms for Low Rank Approximation from Sparsity',
    bib: 'https://dblp.org/rec/conf/soda/WoodruffY22.html?view=bibtex',
    authors: '(with David P. Woodruff)',
    venue: 'SODA 2022',
    resourceGroups: [
      [link('https://arxiv.org/abs/2111.00668', 'arXiv')],
      [link('https://doi.org/10.1137/1.9781611977073.95', 'proceedings')],
      [
        link('https://www.youtube.com/watch?v=fdayFa-xZTc', 'talk @ SODA'),
        text(', '),
        link('/docs/slides/wy22.pdf', 'slides'),
      ],
    ],
    pitch: String.raw`Spectral low rank approximation in $\frac{\nnz(A)}{\sqrt\eps}$ time instead of $\frac{\nnz(A)}{\sqrt\eps}k$ when singular vectors are sparse`,
  },
  LWY2021: {
    title: String.raw`Exponentially Improved Dimensionality Reduction for $\ell_1$: Subspace Embeddings and Independence Testing`,
    bib: 'https://dblp.org/rec/conf/colt/LiW021.html?view=bibtex',
    authors: '(with Yi Li and David P. Woodruff)',
    venue: 'COLT 2021',
    resourceGroups: [
      [link('https://arxiv.org/abs/2104.12946', 'arXiv')],
      [link('http://proceedings.mlr.press/v134/li21c.html', 'proceedings')],
      [link('/docs/posters/lwy21.pdf', 'poster')],
      [
        link('https://www.youtube.com/watch?v=c7TrpsmxoMY', 'long talk @ CMU'),
        text(', '),
        link('/docs/slides/lwy21.pdf', 'slides'),
      ],
      [
        link('http://www.learningtheory.org/colt2021/virtual/poster_1322.html', 'talk @ COLT'),
        text(', '),
        link('/docs/slides/lwy21_colt.pdf', 'slides'),
      ],
    ],
    pitch: String.raw`Improving oblivious linear embeddings of $d$-dim subspaces of $\ell_1^n$ into $\ell_1^r$, from $r = 2^{2^d}$ to $r = 2^d$`,
  },
  FWY2020: {
    title: 'Graph Spanners in the Message-Passing Model',
    bib: 'https://dblp.org/rec/bibtex/conf/innovations/FernandezW020',
    authors: '(with Manuel Fernández V and David P. Woodruff)',
    venue: 'ITCS 2020',
    resourceGroups: [
      [link('https://arxiv.org/abs/1911.05991', 'arXiv')],
      [link('https://doi.org/10.4230/LIPIcs.ITCS.2020.77', 'proceedings')],
    ],
  },
  ATWY2019: {
    title: 'The Nonlinear Stability Regime of the Viscous Faraday Wave Problem',
    authors: '(with David Altizio, Ian Tice, and Xinyu Wu)',
    venue: 'Quart. Appl. Math.',
    resourceGroups: [
      [link('https://arxiv.org/abs/1905.04747', 'arXiv')],
      [link('https://doi.org/10.1090/qam/1562', 'journal')],
    ],
  },
  FWY2019b: {
    title: String.raw`The Query Complexity of Mastermind with $\ell_p$ Distances`,
    bib: 'https://dblp.org/rec/bibtex/conf/approx/FernandezW019',
    authors: '(with Manuel Fernández V and David P. Woodruff)',
    venue: 'APPROX 2019',
    resourceGroups: [
      [link('https://arxiv.org/abs/1909.10668', 'arXiv')],
      [link('http://dx.doi.org/10.4230/LIPIcs.APPROX-RANDOM.2019.1', 'proceedings')],
    ],
  },
  FWY2019a: {
    title: String.raw`Tight Kernel Query Complexity of Kernel Ridge Regression and Kernel $k$-means Clustering`,
    bib: 'https://dblp.org/rec/bibtex/conf/icml/0002WF19',
    authors: '(with Manuel Fernández V and David P. Woodruff)',
    venue: 'ICML 2019',
    venueNote: ', selected for a long talk',
    resourceGroups: [
      [link('https://arxiv.org/abs/1905.06394', 'arXiv')],
      [link('http://proceedings.mlr.press/v97/yasuda19a.html', 'proceedings')],
      [link('/docs/posters/fwy19.pdf', 'poster')],
      [
        link('https://slideslive.com/38917909/optimization-and-graphical-models?t=0', 'talk @ ICML'),
        text(', '),
        link('/docs/slides/fwy19.pdf', 'slides'),
      ],
    ],
    extraBreaksAfterLinks: 2,
  },
};

export const ALL_PUBLICATION_SECTIONS = [
  { heading: 'Preprints', ids: ['AY2023'] },
  { heading: 2025, ids: ['WY2025', 'CJWY2025'] },
  { heading: 2024, ids: ['YAFBM2024', 'WY2024d', 'WY2024b', 'WY2024a'] },
  { heading: 2023, ids: ['DDWY2023', 'WY2023c', 'WY2023b', 'YBCFFM2023', 'WY2023a'] },
  { heading: 2022, ids: ['WY2022b', 'MMWY2022', 'WY2022a'] },
  { heading: 2021, ids: ['LWY2021'] },
  { heading: 2020, ids: ['FWY2020'] },
  { heading: 2019, ids: ['ATWY2019', 'FWY2019b', 'FWY2019a'] },
];

export const SELECTED_PUBLICATION_IDS = ['WY2025', 'WY2023b', 'WY2023a', 'WY2022b', 'MMWY2022'];

export const THESES = [
  {
    title: 'Algorithms for Matrix Approximation: Sketching, Sampling, and Sparse Optimization',
    degree: 'PhD Thesis, Computer Science, May 2024',
    committee: [
      link('https://www.cs.cmu.edu/~dwoodruf/', 'David Woodruff'),
      text(' (Chair), '),
      link('https://cs.nyu.edu/~anupamg/', 'Anupam Gupta'),
      text(', '),
      link('https://www.cs.cmu.edu/~yangp/', 'Richard Peng'),
      text(', '),
      link('https://people.cs.umass.edu/~cmusco/', 'Cameron Musco'),
    ],
    resourceGroups: [
      [link('/docs/phd-thesis/phd-thesis.pdf', 'pdf')],
      [link('/docs/phd-thesis/slides.pdf', 'slides')],
      [link('http://reports-archive.adm.cs.cmu.edu/anon/anon/usr/ftp/home/ftp/2024/abstracts/24-110.html', 'CMU')],
    ],
  },
  {
    title: 'Asymptotic Stability of the Faraday Wave Problem',
    degree: 'MS Thesis, Mathematical Sciences, May 2019',
    committee: [
      link('https://www.math.cmu.edu/~iantice/', 'Ian Tice'),
      text(' (Chair), '),
      link('http://giovannileoni.weebly.com/', 'Giovanni Leoni'),
      text(', '),
      link('https://sites.google.com/berkeley.edu/fweber', 'Franziska Weber'),
    ],
    resourceGroups: [
      [link('/docs/ms-thesis/ms-thesis.pdf', 'pdf')],
      [link('/docs/ms-thesis/slides.pdf', 'slides')],
    ],
  },
];

export const TEACHING = [
  {
    course: '15-859 Algorithms for Big Data',
    href: 'http://www.cs.cmu.edu/~dwoodruf/teaching/15859-fall21/',
    role: 'TA',
    term: 'Fall 2021',
  },
  {
    course: '15-259 Probability and Computing',
    href: 'https://www.cs.cmu.edu/~harchol/PnC/class.html',
    role: 'TA',
    term: 'Spring 2021',
  },
  {
    course: '15-451 Algorithms',
    href: 'https://www.cs.cmu.edu/afs/cs/academic/class/15451-s19/www/',
    role: 'TA',
    term: 'Spring 2019',
  },
  {
    course: '21-127 Concepts of Mathematics',
    href: 'http://www.math.cmu.edu/~mradclif/teaching/127S19/',
    role: 'TA',
    term: 'Spring 2019',
  },
  {
    course: '21-241 Linear Algebra',
    href: 'http://www.math.cmu.edu/~mradclif/teaching/241F18/',
    role: 'TA',
    term: 'Fall 2018',
  },
  {
    course: '21-356 Principles of Real Analysis II',
    role: 'grader',
    term: 'Spring 2017',
  },
  {
    course: '21-295 Putnam Seminar',
    href: 'http://www.math.cmu.edu/~ploh/2016-putnam.shtml',
    role: 'grader',
    term: 'Fall 2016',
  },
];
