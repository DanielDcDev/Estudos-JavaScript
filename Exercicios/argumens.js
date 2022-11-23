function somar() {
    console.log(arguments)
    let total = 0;
    for (let i =0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(somar (1,2,3));
console.log(somar (1,2,3, 4, 5,56));
console.log(somar (12,54,433,31,2,3));
/*
function somar(n1) {
    let total = 0;
    for (let i =0; i < n1.length; i++){
        total += n1[i];
    }
    return total;
}
console.log(somar ([1,2,3]));
console.log(somar ([1,2,3, 4, 5,56]));
console.log(somar ([12,54,433,31,2,3]));*/

/*
resumo da aula, ambas as duas formas funcionam, tanto a 
passada pelo professor quanto a implementada por 
mim, porém as duas em sequencia não funcionam
*/
