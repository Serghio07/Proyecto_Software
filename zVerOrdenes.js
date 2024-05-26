function openPopup() {
    document.getElementById('popupuno').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupuno').style.display = 'none';
}

function goBack() {
    window.location.href = 'zMenuTrab.html'; // Cambia esto al nombre de tu archivo principal
}

function confirmOrder() {
    openPopup(); // Abre el pop-up al confirmar el pedido
}
