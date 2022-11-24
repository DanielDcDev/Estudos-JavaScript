/*(function(){
    function Imc(peso, altura){
        let imc =0, imcF=0;
        
    if(typeof peso!=="number" ||typeof altura!=="number"){
        throw Error("Only numbers")
    }        
        imc= altura*altura
        imcF =peso/imc
        if(imcF < 18.5){console.log("Peso muito abaixo do esperado");
  }else if(imcF => 17.0 && imcF <= 18.4){console.log("Peso abaixo do esperado");
  }else if(imcF => 18.5 && imcF <= 24.9){console.log("Peso normal esperado");
  }else if(imcF => 25.0 && imcF <= 29.9){console.log("Acima do peso esperado");
  }else if(imcF => 30.0 && imcF <= 34.9){console.log("Obesidade Grau I");
  }else if(imcF => 35.0 && imcF <= 40.0){console.log("Obesidade Grau II");
  }else if(imcF => 40.0){console.log("Obesidade Grau III");}
  //console.log(imcF);      
  return  imcF|| 0
        
    }

    console.log("imc " + Imc(110,1.90) )
})()
*/
//Versão implementada pelo aluno com erro de lógica que não conseguiu finalizar,

function CalcularIMC(peso, altura){

    if( peso === undefined || altura=== undefined ){
        throw Error("need two parameters: weight  and height")
    }
    return peso /(altura * altura)
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
console.log(CalcularIMC);
console.log(ClassificaIMC(imc))