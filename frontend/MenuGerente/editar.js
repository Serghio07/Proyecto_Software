
const openModal = document.querySelector(".editarm");
const modal = document.querySelector(".modal");
const cerrar = document.querySelector(".cerrar");
const cancelButton = document.querySelector(".cancel-btn");

openModal.addEventListener('click', () => {
    modal.classList.add('modal-show');
});

cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
});

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
});
