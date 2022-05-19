/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


////////////////////////////////////////1////////////////////////////////////////////

/*for ( let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}
/////////////////////////////////////////2///////////////////////////////////////////

let somando = 0;

for( let index = 0; index < numbers.length; index += 1) {
  
  somando += numbers[index];
}
console.log(somando); 
/////////////////////////////////////////3 && 4//////////////////////////////////////


let somando = 0; 
let media;

for(let index = 0; index < numbers.length; index += 1){
  somando += numbers[index];
  media = somando / numbers.length;

  
}

if( media > 20 ) {
  console.log("Valor maior que 20 =)")
}else { 
  console.log("Valor menor que 20 =(")
}
*/
////////////////////////////////////////////5////////////////////////////////////////

/*let maior = ;

for( let index = 0; index < numbers.length; index += 1){
  if( numbers[index] > maior){
    maior = numbers[index];
  }
}

console.log(maior)
/*
//////////////////////////////////////////////6//////////////////////////////////////

let menor = 0;
for(let index = 0; index < numbers.length; index += 1) {
  menor = numbers[index]
  if(menor % 2 === 1) {
    console.log(menor)
  }
}
///////////////////////////////////////////////7/////////////////////////////////////

 
let valorMenor;

for(let index = 0; index < numbers.length; index += 1) {

  valorMenor = numbers[index]

  if(valorMenor <= index) {
    
    console.log(valorMenor);
  }

  
}
/////////////////////////////////////////////8///////////////////////////////////////


let contador= [];

for(let index = 0; index < 26; index += 1) {
  
  contador.push(index)
  
}

//console.log(contador)
/////////////////////////////////////////////9///////////////////////////////////////

for ( let index = 0; index < contador.length; index += 1) {
  
  console.log(index / 2)
  
  //console.log(contador[index] / 2);
}
/////////////////////////////////////////////BONUS///////////////////////////////////////


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for( let index = 1; index < numbers.length; index += 1) {
  for( let index2 = 0; index2 < index; index2 += 1) {

    if(numbers[index] > numbers[index2]) {
      
      let position = numbers[index2];
      numbers[index2] = numbers[index];
      numbers[index] = position;
      
      
    }

    
  }
 
}

console.log(numbers)

/////////////////////////////////////////////BONUS///////////////////////////////////////
*//*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplos = [];

for(let index = 0; index < numbers.length; index += 1){
  if( index + 1 < numbers.length){

    multiplos.push(numbers[index] * numbers[index +1]);

  } else {

    multiplos.push(numbers[index] *2)
  }
  
}

console.log(multiplos)
*/
