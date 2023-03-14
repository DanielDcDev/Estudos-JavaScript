function inverter(dado){
    var novaString = "";
    
    for (var i = dado.length - 1; i >= 0; i--) { 
        novaString += dado[i];
    }
    return novaString;
}
inverter("Olá Mundo");