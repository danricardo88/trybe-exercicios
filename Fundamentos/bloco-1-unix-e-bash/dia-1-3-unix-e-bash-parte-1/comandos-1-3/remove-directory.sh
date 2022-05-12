#!/bin/bash
#Remove o diretório (vazio);
rmdir diretorio
#
#Remove um diretório que não esteja vazio;
rm -rd diretorio
#
#Não pede autorização para o usuário e ignora os arquivos não localizados;
#(Força remoção caso rm -rd não funcione);
rm -rf diretorio
