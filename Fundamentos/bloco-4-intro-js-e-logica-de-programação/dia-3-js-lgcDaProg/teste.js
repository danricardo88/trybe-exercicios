/*let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = [0];
let menor = [0];

for(let index = 0; index < array.length; index += 1){
  
  if(array[index].length > maior.length) {
      
  maior = array[index];
    
  }  
    
}

for( let index = 0; index < array.length; index += 1) {

  if(array[index].length < menor.length){
    menor = array[index];
  }

}

console.log(maior);
console.log(menor);