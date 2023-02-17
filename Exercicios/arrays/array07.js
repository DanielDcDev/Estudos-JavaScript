//Spred Opererator

const arr = [1,2,3]
const arr2 = [1,2,3]

function sun(){
    console.log(arguments);
    console.log(arguments.length);
}

sun (1,2,3)//arguments.length = 3
sun (arr) //arguments.length =1
sun ([1,2,3])

sun(...[1,2,3])
sun(...arr)

arr.push(...arr2)
console.log(arr);