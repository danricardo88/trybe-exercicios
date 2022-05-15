//const a = 3;
//const b = 1;
//const c = 12;

//let adicao = a + b;
//console.log(adicao);

//let subtracao = a - b; 
//console.log(subtracao);

//let multiplicacao = a * b;
//console.log(multiplicacao);

//let divisao = a / b;
//console.log(divisao)

//let modula = a % b;
//console.log(modula)

// -------------------> EXERCÍCIO 2 <------------------
//const a = 3;
//const b = 1;
//const c = 12;

/*if(a > b) {
  return console.log(a);

} else if (a < b) {
  console.log(b)

} else {
  return console.log("erro 404");

}

*/
// -------------------> EXERCICIO 3 <------------------
//const a = 3;
//const b = 1;
//const c = 12;

/*if ( a > b && a > c ) {

  console.log(a);

} else if (b > c) {

  console.log(b);

} else { 
  
  console.log(c)

};*/

//// -------------------> EXERCICIO 4 <------------------
/*const a = 3;
const b = 0;
const c = -12;

//Math.sign(c); 

if( b > 0) {

  console.log("+");

} else if ( b < 0) {

  console.log("-");

} else {

  console.log("NaN");

}
*/
// ------------------> EXERCICIO 5 <------------------

/*const a = 60;
const b = 60;
const c = 60;

const triangulo = 180;

if ( a + b + c === triangulo ) {

  console.log(true);

} else {

  console.log(false);

}
*/

// ------------------> EXERCICIO 6 <------------------
/*let pecaDeXadrez = 'isis';

switch (pecaDeXadrez.toLowerCase()) {
  case "rei":
  console.log("O rei não é uma peça muito poderosa, pois só pode se mover (ou capturar) uma casa em qualquer direção. Atenção: o rei não pode ser capturado! Quando um rei é atacado, diz-se que ele está em xeque");
  break;

  case "rainha":
  console.log("A dama é considerada uma peça maior (como a torre) e vale nove pontos. Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo). Uma maneira fácil de lembrar como uma dama pode se mover é saber que ela se move como uma torre e um bispo juntos!");
  break;

  case "bispo":
  console.log("Cada lado começa com dois bispos, um em uma casa clara e outro em uma casa escura. Quando uma partida começa, os bispos das Brancas estão localizados em c1 e f1, enquanto os bispos das Negras estão localizados em c8 e f8.");
  break;

  case "cavalo":
  console.log("cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, se move em `L` !");
  break;
  
  case "torre":
  console.log("A torre é considerada uma peça maior (como a dama) e vale cinco pontos. Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças. Uma maneira fácil de lembrar como uma torre pode se mover é imaginar que ela se move como um sinal de "+".");

  case "peao":
  console.log("O peão é a peça menos poderosa e vale um ponto. Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita. No diagrama a seguir, o peão acabou de mover da casa e2 para a casa e4 e ataca as casas d5 e f5. O peão é a única peça que não pode recuar!")
  break;
  
  default:
  console.log("Erro 404")
  
  break;
}
*/

// ------------------> EXERCICIO 7 <------------------

/*let nota = 39;

if ( nota < 0 || nota > 100) {
  console.log("Erro 404")
}
else if (nota > 90) {
  console.log("A");
}
else if (nota > 80) {
  console.log("B");
}
else if (nota > 70) {
  console.log("C")
}
else if (nota > 60) {
  console.log("D");
}
else if (nota > 50) {
  console.log("E");
}
else {
  console.log("F");
}
*/
// ------------------> EXERCICIO 8 <------------------
 /*
 const a= 1;
 const b= 1;
 const c= 1;

 let fixando = false

 if((a % 2=== 0 || b % 2=== 0 || c % 2=== 0 )){
   fixando = true;
 };

 console.log(fixando);

 */

 
// ------------------> EXERCICIO 9 <------------------

/** 
const a= 2;
const b= 2;
const c= 2;

let fixando = false

if((a % 2=== 1 || b % 2=== 1 || c % 2=== 1 )){
  fixando = true;
};

console.log(fixando);

*/

// ------------------> EXERCICIO 10 <------------------
/*
const produto = 10;
let impostos = 1.2;
const revenda = 20;
let valorDoLucro = 0

if (produto >= 0 && revenda >= 0) {

  valorDoLucro = (produto * impostos);
  valorDoLucro = (revenda - valorDoLucro); 
  console.log(valorDoLucro);

} else {
  console.log("ERRO 404");
}
*/

// ------------------> EXERCICIO 11 <------------------

let inss = 0.11;
let ir = 0.075;

let salarioBruto = 3000.00;
let salarioLiquido = 0;

If ( salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ) {

  salarioLiquido = (salarioBruto - (salarioBruto * inss));

  salarioLiquido = (salarioLiquido - (salarioLiquido * ir));

  console.log("Meu salário liquido é R$ " ${salarioLiquido - 142.80} );


}

