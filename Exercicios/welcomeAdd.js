(function () {
const name = prompt("Digite seu nome");
    if(name){
        const topBarElement = document.createElement("div");
        topBarElement.className = "top-bar";
        topBarElement.innerHTML = `<p>Olá, <b> ${name} </b> </p>`
    
        
        const fatherElement = document.querySelector(".hero");
        const ReferenceElement = document.querySelector(".hero-content");
        fatherElement.insertBefore(topBarElement, ReferenceElement);
        
        
    }

})()
