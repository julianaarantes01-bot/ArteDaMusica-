// Seleciona os elementos do HTML

const modal = document.getElementById("modal");

const fecharModal = document.getElementById("fecharModal");

const btnMito = document.getElementById("btnMito");

const btnVerdade = document.getElementById("btnVerdade");

const tituloModal = document.getElementById("tituloModal");

const textoModal = document.getElementById("textoModal");


// Quando clicar no botão do MITO
btnMito.addEventListener("click", function() {

    tituloModal.textContent = "Mito: É preciso nascer com talento";

    textoModal.textContent =
    "Embora algumas pessoas apresentem facilidade inicial, qualquer pessoa pode aprender música com dedicação, estudo e prática constante.";

    modal.style.display = "block";
});


// Quando clicar no botão da VERDADE
btnVerdade.addEventListener("click", function() {

    tituloModal.textContent = "Verdade: A prática melhora o desempenho";

    textoModal.textContent =
    "O desenvolvimento musical acontece gradualmente. A prática regular fortalece habilidades técnicas, percepção auditiva e criatividade.";

    modal.style.display = "block";
});


// Quando clicar no X
fecharModal.addEventListener("click", function() {

    modal.style.display = "none";
});


// Fechar clicando fora da janela
window.addEventListener("click", function(event) {

    if(event.target === modal) {

        modal.style.display = "none";
    }

});