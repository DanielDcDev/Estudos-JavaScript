const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");

function RegisterEmail(){
    //aqui jaz um erro, pois ao informar que é um let, que seria o correto ele retorna um objeto nulo
    //por isso optei por usar um var
    var email = txtEmail.value
    msgFeedback.innerHTML = `O Email ${email} foi cadastrado com sucesso`;
}

