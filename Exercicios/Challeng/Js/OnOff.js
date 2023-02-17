const txtEmail = document.getElementById("txtEmail")
txtEmail.disabled = true;

function EditEmail() {
    
    txtEmail.disabled = false
    txtEmail.focus();
}
function DisabledEmail(){
        txtEmail.disabled = true;
    }


