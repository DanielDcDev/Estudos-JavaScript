(function () {
    const nomeusuario = "Daniel";
   // document.querySelector(".Welcome").innerHTML ="Bem vindo (Sr.), " + nomeusuario;
    const elemento = document.querySelector(".top-bar p")
    //troca todo o texto
//    elemento.textContent = "Bem vindo (Sr), " + nomeusuario
    //apenas adiciona a variavel
//    elemento.textContent= elemento.textContent + nomeusuario
    //mesma coisa porém resumido
//    elemento.textContent += nomeusuario    
    //mesma coisa porém com a possibilidade de modificar via html
    elemento.innerHTML += "<b>" + nomeusuario + "<b>";
})()
