let arr = [4,5,4,9,8,6,5,7,21]
console.log(arr.find(function (el){
    return el > 10;
}));

console.log(arr.findIndex(function (el){
    return el > 10;
}));