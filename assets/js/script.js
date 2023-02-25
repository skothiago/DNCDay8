const signUp = () => {
    const inputName = document.getElementsByClassName("input_name")[0];
    const inputEmail = document.getElementsByClassName("input_email")[0];
    if (inputName.value === ""  || inputEmail.value === "") {
        alert("Não foi possível efetivar seu cadastro.");
    } else {
        alert("Cadastro efetuado com sucesso");
    }
};