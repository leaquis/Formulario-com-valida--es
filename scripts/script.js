const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelector(".error-message");

form.addEventListener("submit",  () => {
    event.preventDefault();
    validadeInputs()
});

function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage; 
    input.parentElement.classList.add("error");
}

function validadeInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(nomeValue == "") {
        setError(nome, "O nome não pode ficar em branco!");
        
    }

    if(emailValue == "") {
        setError(email, "O email não pode ficar em branco!");
        
    }

    if(assuntoValue == "") {
        setError(assunto, "O assunto não pode ficar em branco!");
        
    }

    if(mensagemValue == "") {
        setError(mensagem, "A mensagem não pode ficar em branco!");
        
    }
}
