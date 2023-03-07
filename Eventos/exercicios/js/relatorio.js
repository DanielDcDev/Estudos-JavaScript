'use strict';
const titulo = document.getElementById('txtTitulo');
const descricao = document.getElementById('txtDescricao');
const spamCaracteres = document.getElementById('span');
const button = document.getElementById('chkAceito');
const submit  = document.getElementById('btn');
const formCadastro = document.querySelector(".formCadastro");

formCadastro


submit.addEventListener("click",function(e){  
        console.log(titulo.value);
        if(!titulo.value){
            e.preventDefault;
            alert("Preencha todos os campos");
            titulo.focus();

        }

})
