//hide or unhide the password

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.classList.add("fa-eye");
    eyeicon.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    eyeicon.classList.add("fa-eye-slash");
    eyeicon.classList.remove("fa-eye");
  }
});


//validate code for inputs

var email = document.forms['form']['email'];
var pass_word = document.forms['form']['password'];

email.addEventListener('textInput',email_Verify);
pass_word.addEventListener('textInput',pass_Verify);

var email_error = document.getElementById('email_err');
var password_error = document.getElementById('pass_err');

function validate(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if(pass_word.value.length < 9){
        pass_word.style.border = "1px solid red";
        password_error.style.display = "block";
        email.focus();
        return false;
    }
}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid red";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify(){
    if(pass_word.value.length >= 5){
        pass_word.style.border = "1px solid red";
        password_error.style.display = "none";
        return true;
    }
}
