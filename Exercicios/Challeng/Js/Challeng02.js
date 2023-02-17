function sum(){
    const numbers = Array.from(arguments)
    console.log(numbers);
 return numbers.reduce( function(sum, atual) {
    return sum + atual;
 })
}
function averege(){

    return sum(...arguments) / arguments.length;
 

}
let soma = sum(1,2,3,4,5,6)

console.log(soma);


console.log("Media\n");
let media =averege(8,8,5,8)
console.log(media);