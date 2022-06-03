/*
let fat = 1;

for( let index = 10; index > 0; index -= 1){
  fat *= index;
}
console.log(fat);

////////////////////////////////////2///////////////////////////////

let word = 'tryber';
let troca = '';

for (let index = 0; index < word.length; index += 1 ) {
  troca += word[word.length - 1 - index];

}
console.log(troca)
---------------------------------------

let word = 'xablau';
let troca = '';

troca = word.split('').reverse().join('');
console.log(troca)
///////////////////////////////3////////////////////////////

*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = [0];


for(let index = 0; index < array.length; index += 1){
  
  if(array[index].length > maior.length) {
      
    maior = array[index];
  }
    
}

let menor = array [0];

for( let index = 0; index < array.length; index += 1) {

  if(array[index].length < menor.length){
    
    menor = array[index];
  }

}

console.log(maior);
console.log(menor);