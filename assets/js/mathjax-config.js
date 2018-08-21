const shortcuts = {
        eps: "\\varepsilon",
        parens: ["{\\left(#1\\right)}",1],
        abs: ["{\\left\\lvert#1\\right\\rvert}",1],
        bracks: ["{\\left[#1\\right]}",1],
        braces: ["{\\left\\{#1\\right\\}t}",1],
      },
      operators = {
        Var: "\\operatorname{Var}",
        tr: "\\operatorname{tr}"
      }
var boldface = {
  bbone: "\\unicode{x1D7D9}"
};
// add lowercase boldface
for (var i = 0; i < 26; i++) {
  var letter = String.fromCharCode(97 + i),
      key = "bf" + letter;
  boldface[key] = "\\mathbf{" + letter + "}";
}
// add uppercase boldface
for (var i = 0; i < 26; i++) {
  var letter = String.fromCharCode(65 + i),
      key = "bf" + letter;
  boldface[key] = "\\mathbf{" + letter + "}";
}

const TeXMacros = {
  ...shortcuts,
  ...operators,
  ...boldface
}

MathJax.Hub.Config({
  extensions: ["tex2jax.js", "newcommand.js", "AMSmath.js", "AMSsymbols.js", "color.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true
  },
  "HTML-CSS": { fonts: ["TeX"] },
  TeX: { // http://docs.mathjax.org/en/latest/tex.html#defining-tex-macros
    Macros: TeXMacros
  }
});

MathJax.Ajax.loadComplete("/assets/js/mathjax-config.js");
