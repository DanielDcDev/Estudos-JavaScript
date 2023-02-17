const btn = document.getElementById("btnRegister");
const verification = document.getElementById("contrato")
const nome = document.getElementById("txtNome");
const email = document.getElementById("txtEmail");

//pelo fato de não funcionar diretamente no html, faço as desativações diretamente no jsx
//posteriormente foi verificado que isso é uma melhora do código original

verification.disabled = true;
btn.disabled = true;

function VerificationForVerification(){
    //essa é a versão mais simplificada possivel, pois é necessario verificar dois campos
    //para liberar a modificação.
if(nome.checked!=null && email.checked!=null)verification.disabled = false ;

}
function VerificationForRegister(){
   
    if(verification.checked==true)btn.disabled = false ;
    //versão simplificada.
    //bnt.disabled = !=checked
}
