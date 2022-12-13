let arr = [1, 2, 3, 4];
console.log(arr.reverse());

let j = 0;
const soma = arr.reduce(function accumulator(accumulator, current,i , _arr){
    console.log("i: ",i);    
    console.log("j: ",j++);    
    console.log("accumulator: "+ accumulator + " ---current: " + current);    
    return accumulator + current;}, "--")

console.log(soma);
console.log(arr);


let names = ["Daniel", "Maria"," Joana", "Joao"];
let ordenedNames = names.reduce(function (names,currentName){
    let firstWord = currentName[0];
    if(names[firstWord]) {
        names[firstWord]++;
    }else{
        names[firstWord] = 1
    }
}, {}) 

console.log(ordenedNames);