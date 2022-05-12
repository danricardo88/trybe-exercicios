Exercício da Aula 2.2

1- Navegue até a raiz do projeto com o arquivo .txt;

2- Verifique se não existe nada sem "commitar" utilizando git status;

3- Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;

4- No arquivo .txt, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:

5- Faça um git add nome-do-arquivo.extensao;

6- Você pode adicionar todos os arquivos que você modificou usando git add ., mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;

7- Agora um git commit -m "Mensagem que você gostaria";

8- Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill";

9- Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;

10- E por último um git push -u origin trybe-skills-changes;

11- Abra um Pull Request com uma descrição detalhada;

12- O merge deve ser feito apenas quando chegar no exercício 22;

13- Retorne para a branch principal, master, com o comando: git checkout master;

14- Verifique que você está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

15- Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;

16- No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:

17- Faça um git add nome-do-arquivo.extensao;

18- Agora um git commit -m "Mensagem que você gostaria";

19- E por último um git push -u origin trybe-skills-updates;

20- Após o primeiro "push" da sua branch, você pode usar apenas o comando git push;

21- Abra um Pull Request com uma descrição amigável:

22- Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:


