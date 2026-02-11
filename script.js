function abrirModal() {
    document.getElementById("modal-contato").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-contato").style.display = "none";
}

// Fecha a janela se clicar fora dela
window.onclick = function(event) {
    let modal = document.getElementById("modal-contato");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
