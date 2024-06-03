
const openModal = document.getElementById("editarm");
const modal = document.getElementById("edit-modal");
const closeModal = document.getElementById("close-modal");
const cancelButton = document.querySelector(".cancel-btn");

const openDeleteModal = document.getElementById("eliminar_m");
const deleteOverlay = document.getElementById("delete-overlay");
const closeDeleteDialog = document.getElementById("close-delete-dialog");
const denyDeleteButton = document.getElementById("deny-delete");

openModal.addEventListener('click', () => {
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal--show');
});

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openDeleteModal.addEventListener('click', () => {
    deleteOverlay.classList.add('show');
});

closeDeleteDialog.addEventListener('click', () => {
    deleteOverlay.classList.remove('show');
});

denyDeleteButton.addEventListener('click', () => {
    deleteOverlay.classList.remove('show');
});
