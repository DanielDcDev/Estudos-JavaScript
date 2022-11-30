
    if( peso === undefined || altura=== undefined ){
        throw Error("need two parameters: weight  and height")
    }
    let imc = peso /(altura * altura)
    if (typeof cb === "function"){ cb(imc);}
    return imc
}

function ClassificaIMC(imc){

    if ( imc <= 16.9 ){
        return "muito abaixo do peso"
    }else if ( imc <= 18.4 ){
        return " abaixo do peso"
    }else if ( imc <= 24.9 ){
        return "normal"
    }else if ( imc <= 29.9 ){
        return "acima do peso"
    }else if ( imc <= 34.9 ){
        return "obesidade I"
    }else if (imc <= 40.0 ){
        return "obesidade II"
    }else{
        return "obesidade" 
    }

}


let imc = CalcularIMC(90,1.90)
let imc2 = CalcularIMC(90,1.90, ClassificaIMC);
console.log(imc);
//console.log(imc2);