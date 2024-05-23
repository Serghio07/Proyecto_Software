document.getElementById("signup-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar si los campos están vacíos
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        var message = document.getElementById("message");
        message.textContent = "Debe completar todos los campos.";
        return;
    }

    // Validar la contraseña
    if (!validatePassword(password)) {
        var message = document.getElementById("message");
        message.textContent = "La contraseña no cumple con los requisitos.";
        return;
    }

    // Guardar el nombre de usuario para evitar duplicados
    localStorage.setItem(username, true);

    // Mostrar el modal de éxito
    showModal();
    
    // Cerrar automáticamente el modal después de 4 segundos
    setTimeout(closeModal, 3000);
});

function validatePassword(password) {
    // Requisitos de la contraseña: longitud mínima de 8 caracteres, al menos un número, una letra mayúscula y un carácter especial
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z]).{8,}$/;
    return passwordRegex.test(password);
}

function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "flex"; // Cambiar a 'flex' para centrarlo
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Ocultar la ventana modal al cargar la página
window.onload = function() {
    closeModal();
}

// Mostrar u ocultar la contraseña
document.getElementById("show-password").addEventListener("change", function() {
    var passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
