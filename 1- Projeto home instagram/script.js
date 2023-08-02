const inputLogin = document.getElementById("input-login");
const inputPassword = document.getElementById("input-password");
const buttonLogin = document.getElementById("button-login");

function inputValidate(input) {
    input.addEventListener("keyup", () => {
        let inputLoginValue = inputLogin.value;
        let inputPasswordValue = inputPassword.value;

        if(inputLoginValue.length > 2 && inputPasswordValue.length > 4) {
            buttonLogin.classList.add("valid");
        } else {
            buttonLogin.classList.remove("valid");
        }
    });
}

inputValidate(inputLogin);
inputValidate(inputPassword);
