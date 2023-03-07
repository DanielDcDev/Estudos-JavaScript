const alvo = document.querySelector(".alvo ul");
const container = document.querySelector(".original ul");
const list = document.querySelector("ul");

// crie um nova li com texto "item 2" e a inclua na ul de div com class .alvo

const des01 = document.createElement("li");
des01.textContent = "item 2";
des01.setAttribute("style", "color: red;");
alvo.insertAdjacentElement("beforeend", des01);
/*
solução trazida pelo professor
const li = document.createElement("li");
li.textContent = "item 2";
ulAlvo.appendChild(li);
*/ 

//Mova a última li de orignal para alvo (mas antes da primeira li). 
//Em outras palavras, a última li da original deve virar a primeira li de alvo
//usaremos parent.insertBefore(element, referencia)
alvo.insertBefore(container.lastElementChild, alvo.firstElementChild);

//altere o texto da primeira li de .alvo para "item 0"

alvo.children[0].textContent = "item 0";

//clone a ul de .original e a inclua na primeira li de .alvo
const clone = list.cloneNode(true);
list.firstElementChild.appendChild(clone);

//remova a ultima li (item2) da lista inserida na etapa anterior
clone.removeChild(clone.lastElementChild)
//remova as duas li's que sobraram na ul original
container.innerHTML = "";