#!/bin/bash
#Procura por palavra-chave no arquivo;
grep 'palavra-chave' arquivo
#
#Retira o case sensitive da pesquisa;
grep -i 'palavra-chave' arquivo
#
#Mostra todas as linhas que não correspondem a pesquisa;
grep -v 'palavra-chave' arquivo
#
#Mostra a linha dos itens encontrados no arquivo;
grep -n 'palavra-chave' arquivo
#
#Mostra a quantidade de itens encontrados;
grep -c 'palavra-chave' arquivo

