export const KATEX_RENDER_OPTIONS = {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false },
  ],
  throwOnError: false,
  macros: {
    '\\eps': '\\varepsilon',
    '\\nnz': '{\\mathsf{nnz}}',
    '\\poly': '{\\mathrm{poly}}',
    '\\Var': '\\operatorname{Var}',
    '\\tr': '\\operatorname{tr}',
  },
};

export const renderMath = (element) => {
  if (!element || typeof window.renderMathInElement !== 'function') {
    return false;
  }

  window.renderMathInElement(element, KATEX_RENDER_OPTIONS);
  return true;
};
