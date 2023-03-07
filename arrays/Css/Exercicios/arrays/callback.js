 const Test = function (cb){
    console.log("test function");
    //console.log(cb);
    if(typeof cb ==="function"){  cb(30);}
    // METODO MAIS AVANÇADO
    //typeof cb === "function" && cb(30);
    console.log("finished test");
}

const Fn = function (parameter){
    console.log("anonymous callback function");
    console.log(parameter);
}
/*
//Fn(30);
ira diretamente na função Fn é retornará as linhas 9 e 10 simples 
*/
/*
//Test(); 
irá retornar simplesmente a função Test
*/
//ira na função Test retornará a linha 2 e ira na função fn e finalizará voltando pra função Test
Test(Fn);