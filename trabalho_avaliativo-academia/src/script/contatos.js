document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");
    const successMessage = document.querySelector(".success-message");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Por favor, preencha todos os campos.";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 3000);
            return;
        }

        successMessage.style.display = "block";
        successMessage.textContent = "Mensagem enviada com sucesso!";
        setTimeout(() => {
            successMessage.style.display = "none";
            form.reset();
        }, 3000);
    });
});
