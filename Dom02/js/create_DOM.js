const title = document.createElement("h1");
const atribute = document.createAttribute("id");
atribute.value = "title1";
title.setAttributeNode(atribute);

title.setAttribute("title", "Title inserido dinamicamente");
title.setAttribute("style", "color:red;");

const text =  document.createTextNode("Criar nós no DOM");
title.appendChild(text);

title.textContent = "texto inserido com TextContent";

console.log(title);



document.querySelector(".container").appendChild(title);

const title2 = document.createElement("h1");
title2.textContent = "Segundo Titulo";
title2.setAttribute("style", "color:red;");

const list = document.querySelector("ul");

const container = document.querySelector(".container");

document.querySelector(".container").insertBefore(title2, list);
//na linha a seguir você verá uma abreviação da linha 28
container.insertBefore(title2,container.firstChild);

let sublevel = document.querySelector("ul ul");
sublevel = sublevel.cloneNode(true);
const h2 = document.querySelector("h2");

container.insertBefore(sublevel, h2.nextElementSibling);

const SecondBigText = container.firstElementChild.nextSibling;



const container2 = document.querySelector(".container2")

/*
É possivel inserir os seguintes 
beforebegin, afterbegin, beforeend, afterend
*/
container2.insertAdjacentHTML("beforebegin", "<b> texto inserido</b>");
container2.insertAdjacentHTML("afterbegin", "<b> texto inserido 2 </b>");
container2.insertAdjacentHTML("beforeend", "<b> texto inserido 3</b>");
container2.insertAdjacentHTML("afterend", "<b> texto inserido 4</b>");


container2.insertAdjacentHTML("afterbegin", " <b> texto inserido 5 </b><br>");

const em = document.createElement("em");
em.textContent = "texto com enfase";
container2.insertAdjacentElement("afterend", em);

//list.remove(); - Metodo atual
//parentNode.removeChild(list) - metodo para todos os browser´s

list.parentElement.removeChild(list);
const parent = document.body;
const newChild = container.querySelector("h1").cloneNode(true);
const oldChild =  document.querySelector("h1");
parent.replaceChild(newChild , oldChild)

