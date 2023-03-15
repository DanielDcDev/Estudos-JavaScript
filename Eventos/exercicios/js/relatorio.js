'use strict';
(function(){

const contadorContainer = document.getElementById('contador');
const titulo = document.getElementById('txtTitulo');
const descricao = document.getElementById('txtDescricao');
const spamCaracteres = document.getElementById('span');
const button = document.getElementById('chkAceito');
const submit  = document.getElementById('btn');
const formCadastro = document.querySelector(".formCadastro");
const resta = contadorContainer.getElementsByTagName('span')[0]
//não coloquei o numero maximo para não precisar modificar depois
const max = descricao.maxLength

formCadastro.addEventListener('submit', function(e){

        if(!titulo.value){
            e.preventDefault;
            alert("Preencha todos os campos");
            titulo.focus();

        }
})

contadorContainer.removeAttribute('style')
//outra forma
//contadorContainer.style.display = 'block'

descricao.addEventListener("keyup", function(){
    console.log('keyup');
})
descricao.addEventListener("keydown", function(){
    console.log('keydown');
})
descricao.addEventListener("keypress", function(){
    console.log("keypress");
})
descricao.addEventListener('input', function(){
    console.log("input");
})
})()


