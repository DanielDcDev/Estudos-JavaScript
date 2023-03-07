let arr = [1,3,4,5,6];
let test = arr.push( 11,13,true, "ola mundo");
console.log(test);
console.log(arr);

let lastItem = arr.pop();
lastItem = arr.pop();
console.log(lastItem);
console.log("["+arr+"]");

let firstItem = arr.shift()
console.log(firstItem);
console.log("["+arr+"]");

test = arr.unshift(8,8,8);
console.log(test);
console.log("["+arr+"]");

//achei meio inutil
let arr2 = arr.slice(2,4);
console.log(arr2);
console.log("["+arr+"]");

let arr3 = arr.splice(2);
console.log(arr3);
console.log("["+arr+"]");
