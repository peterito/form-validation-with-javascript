const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show input success message
function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSucess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}
//check required refractor code for all input
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFirstLetter(input)} is required`);
        } else {
            showSucess(input);
        }
    });
}
// check length input character length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFirstLetter(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(input, `${getFirstLetter(input)} must be less than ${max} characters`
        )
    } else {
        showSucess(input);
    }};

    //check password matched
    function checkPasswordMatch(input1, input2){
        if(input1.value !== input2.value){
            showError(input2, 'Passwords do not match');
        }
    }
//check password expression
function CheckPassword(input){ 
const passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
if(input.value.match(passw)){ 
showSucess(input);
}else{ 
showError(input, 'password must contained special character,number, lowerCase and UpperCase letter')

}
} 


    //Get first Letter
    function getFirstLetter(input) {
        //put the first letter to upper case
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    //Event Listener
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        checkRequired([username, email, password, password2]);
        checkLength(username, 3, 15);
        checkLength(password, 8, 25);
        checkEmail(email);
        checkPasswordMatch(password, password2);
        CheckPassword(password);


    });

        /*if (username.value === '') {
                showError(username, 'username is required');
            } else {
                showSucess(username);
            }
        
            if (email.value === '') {
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Email is not valid');
            } else {
                showSucess(email);
            }
        
            if (password.value === '') {
                showError(password, 'password is required');
            } else {
                showSucess(password);
            }
            if (password2.value === '') {
                showError(password2, 'confirm password is required');
            } else {
                showSucess(password2);
            } */