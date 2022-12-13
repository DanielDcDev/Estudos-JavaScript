const numbers = [1,2,3,4,5,6,6,7]
const unicNumbers = numbers.reduce(function(unicNumbers, currentNumber){
    unicNumbers = numbers
    if(unicNumbers.indexOf(currentNumber)<0){
        unicNumbers.push(currentNumber);
    }
    return unicNumbers;
},{})

console.log(unicNumbers);