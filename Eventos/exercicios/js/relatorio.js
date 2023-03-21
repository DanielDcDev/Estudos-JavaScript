'use strict';
(function(){

const contadorContainer = document.getElementById('contador');
const titulo = document.getElementById('txtTitulo');
const descricao = document.getElementById('txtDescricao');
const spamCaracteres = document.getElementById('span');
const button = document.getElementById('chkAceito');
const btn  = document.getElementById('btn');
const formCadastro = document.querySelector(".formCadastro");
const resta = contadorContainer.getElementsByTagName('span')[0];

btn.disabled = true;
button.addEventListener("change", Acepted)
function Acepted(){
    btn.disabled =  !this.checked;
} 

//não coloquei o numero maximo para não precisar modificar depois
const maxima = descricao.maxLength;
showNumber(maxima);

formCadastro.addEventListener('submit', function(e){

        if(!titulo.value){
            e.preventDefault;
            showErrorMEssage("Preencha todos os campos");
        }
        e.preventDefault()
})
const feedbackMessage = document.getElementById("feedbackMessage")
const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

function showErrorMEssage(msg, cb){
    //alert(msg)
    //feedbackMessage.setAttribute("class", "gfshow");
    feedbackMessage.classList.add("show")
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg;

    feedbackMessageCloseBtn.focus()
    
    function hideErrorMessage(){
        feedbackMessage.classList.remove("show");

        feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage);
        feedbackMessageCloseBtn.removeEventListener("keyup", pressedkeyboardOnBtn);
        if (typeof cb === "function"){
            cb()
        }
    }

function pressedkeyboardOnBtn(e){
    if(e.keyCode === 27){
        hideErrorMessage();
    }
}

    feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage);

    feedbackMessageCloseBtn.addEventListener("keyup", pressedkeyboardOnBtn);
    
}





contadorContainer.removeAttribute('style')
//outra forma
contadorContainer.style.display = 'block'
function CheckLength(){
    let numeroLetrasDigitadas = this.value.length;
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);  

    showNumber(caractersRestantes);
}

function showNumber(n){
    resta.textContent = n;
}

descricao.addEventListener('input', CheckLength)



})()


