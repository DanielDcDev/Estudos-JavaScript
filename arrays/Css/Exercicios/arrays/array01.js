// some and every
const arr = [1, 5, 10, "olá", true]

// let onlyNumbers = arr.some(function (el) {
//     return typeof el === "number" && el > 30
// })

// console.log(onlyNumbers);


//filter
let arr1 =arr.filter(function(el, i, _arr){
    // console.log(el);
    // console.log(i);
    // console.log(_arr);
    return typeof el === "number";
})
//forEach
arr.forEach(function(el, i, _arr){
    console.log(i,":", el);
})
//Map
let arr2  = arr1.map(function(el,i,_arr){
    return el*el;
})

console.log(arr);
console.log(arr1);
console.log(arr2);