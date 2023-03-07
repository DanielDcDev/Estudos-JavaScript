const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");



function clicou(){
    console.log("click funcao clicou");
}

btn1.onclick = function() {
    console.log("click btn funcao anonima");
}
btn1.onclick = clicou;


btn2.addEventListener("click", clicou);
btn2.addEventListener("click", function(){
    console.log("click btn1 funcao anonima");
});

btn3.addEventListener("click", function(parametro){
    parametro.stopPropagation();
    console.log("clicou no btn3");
}, false)
document.addEventListener("click", function(){
    console.log("clicou no documento");
    console.log(e.target);
}, false)

const container = document.getElementById("container")
container.addEventListener("click", function(){
    console.log("clicou no container");
},true)

const container2 = document.querySelector(".container2");
const btns = document.querySelectorAll(".container2 button");
/*
[...btns].forEach( btn =>{
    btn.addEventListener("click", function(e){
        e.stopPropagation();
        console.log(e.target);
    })
})
*/

container2.addEventListener("click", function(e){
    //e.stopPropagation();
    console.log(e.target);
    console.log();
    console.log();
    console.log();
    /*if(e.target.nodeName === "BUTTON"){
        console.log(e.target);
    }*/
})