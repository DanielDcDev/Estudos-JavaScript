const somar = function() {
    console.log(arguments);
    let total = 0 ;
    for (let i = 0; i < arguments.length; i ++){
        total += arguments[i];
    }
    return total;
}
console.log(somar (1,2,3));
console.log(somar (1,2,3, 4, 5,56));
console.log(somar (12,54,433,31,2,3));