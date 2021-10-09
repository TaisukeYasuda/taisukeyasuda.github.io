'''
Rename theorem environments
'''

import os, sys

if __name__ == '__main__':
    filename = sys.argv[1] if len(sys.argv) > 1 else ''
    filenames = [filename]

    envs = {
        'thm': 'Theorem',
        'lem': 'Lemma',
        'cor': 'Corollary',
        'dfn': 'Definition',
        'prop': 'Proposition',
        'rem': 'Remark',
        'clm': 'Claim',    
    }

    for filename in filenames:
        for old, new in envs.items():
            for se in ['begin', 'end']:
                # should look like 'sed -i '.bak' 's/\begin{thm}/\begin{Theorem}/g', etc
                # { -> {{ for f-strings 
                sed_txt = f'\'s/\\\\{se}{{{old}}}/\\\\{se}{{{new}}}/g\''
                cmd = ' '.join(['sed', '-i', '\'.bak\'', sed_txt, filename])
                print(cmd)
                # os.system(cmd) # you better know what you're doing