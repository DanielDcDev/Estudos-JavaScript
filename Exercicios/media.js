(function(){
function media(){
    console.log(arguments);
    let total = 0;
    for (let i = 0; i <arguments.length; i++){
        if(typeof arguments[i]!=="number"){
            throw Error ("Only numbers");
        }
        total+= arguments[i];
    }
    return (total/arguments.length) || 0;
    
}

console.log( media());
})()

/*
Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2
*/ 