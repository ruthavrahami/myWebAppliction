// check password and username are field
function validate(){
    var userNameField = document.getElementById('username_input');
    var userPasswordField = document.getElementById('password_input');
    var newAccount = document.getElementById('creat_account');

    if (userNameField.value.trim() == "" ||  userPasswordField.value.trim() == "") {
        alert('Name / password is not allowed');
        return false;
    }
    else{
        return true;
    }
    
}

