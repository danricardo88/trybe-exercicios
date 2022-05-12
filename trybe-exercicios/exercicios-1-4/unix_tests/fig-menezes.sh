#!/bin/bash
#
#fig-menezes.sh - cria um arquivo chamado top_skills.txt usando skills2.txt, contendo as 3 primeiras skills em ordem alfabética;
#
#Autor: Luiz Eduardo de Figueiredo Menezes
#
cat skills2.txt | head -3 | sort | cat > top_skills.txt
