import string

greek_alphabet = 'alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega'
greek_alphabet_capital = 'Gamma Delta Theta Lambda Xi Pi Sigma Phi Psi Omega'

for a in string.ascii_lowercase + string.ascii_uppercase:
    print(f'\\newcommand{{\\bf{a}}}{{\\mathbf{{{a}}}}}')

for a in greek_alphabet.split() + greek_alphabet_capital.split():
    print(f'\\newcommand{{\\bf{a}}}{{\\boldsymbol{{\\{a}}}}}')