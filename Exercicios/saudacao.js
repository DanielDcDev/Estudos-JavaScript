(function () {
    const nomeusuario =null;
    const elemento = document.querySelector(".top-bar p");
   if(nomeusuario){
    
    console.log(elemento.textContent);
    elemento.innerHTML += "<b>" + nomeusuario + "<b>";
   }else{
    //elemento.parentElement.style.display = "none"; 
    //elemento.remove(); não é suportado no internet Explorer
    const elementToRemove = elemento.parentElement;
    elementToRemove.parentElement.removeChild(elementToRemove);
   }
   console.log(elemento);
})()
