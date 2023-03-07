let html = document.body.parentElement;
const h2 = document.querySelector('h2')
console.log(document.body);
console.log(document.body.parentElement);
console.log(document.body.parentNode);

console.log(document.body.parentNode === document.body.parentElement);

console.log(html.parentElement);
console.log(html.parentNode);

const h2NextSibling = h2.nextElementSibling;
h2NextSibling.style.background = "pink";

const h2PreviousSibling = h2.previousElementSibling;
h2PreviousSibling.style.background = "red";

const link = document.querySelector('a')
const list = document.querySelector('ul ul')

console.log(link.parentElement.childNodes)
console.log(list.parentElement.childNodes, list.children)
//firstchild e firsElementChild e somente a verificação dos filhos, os primeiros.

console.log(list.lastElementChild.hasChildNodes());
console.log(list.lastElementChild.childNodes[0]);