document.addEventListener("DOMContentLoaded", function () {
    const treinoCards = document.querySelectorAll(".treino-card");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const modalBody = modal.querySelector(".modal-body");
    const closeModal = modal.querySelector(".close-modal");
    
    treinoCards.forEach(card => {
        card.addEventListener("click", function () {
            const treinoTipo = card.dataset.treino;
            let treinoInfo = "";

            switch (treinoTipo) {
                case "iniciante":
                    treinoInfo = "Este treino é ideal para quem está começando, focado em exercícios básicos e progressão gradual.";
                    break;
                case "intermediario":
                    treinoInfo = "Treino intermediário com mais intensidade e maior volume de exercícios.";
                    break;
                case "avancado":
                    treinoInfo = "Treino avançado para quem busca alta performance e resultados rápidos.";
                    break;
                case "funcional":
                    treinoInfo = "Treino funcional para melhorar força, mobilidade e resistência de forma dinâmica.";
                    break;
                default:
                    treinoInfo = "Informações não disponíveis.";
            }

            modalBody.innerHTML = `
                <h2>${card.querySelector("h3").textContent}</h2>
                <p>${treinoInfo}</p>
                <img src="${card.querySelector("img").src}" alt="${card.querySelector("h3").textContent}" style="width: 100%; height: auto; border-radius: 10px;">
            `;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
