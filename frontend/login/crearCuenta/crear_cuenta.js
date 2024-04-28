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

    // Verificar si el correo tiene la terminación correcta
    if (!email.endsWith("@usuario.com")) {
        var message = document.getElementById("message");
        message.textContent = "El correo debe tener la terminación '@usuario.com'.";
        return;
    }

    // Validar la contraseña
    if (!validatePassword(password)) {
        var message = document.getElementById("message");
        message.textContent = "La contraseña no cumple con los requisitos.";
        return;
    }

    // Verificar si el nombre de usuario ya existe
    if (localStorage.getItem(username)) {
        var message = document.getElementById("message");
        message.textContent = "El nombre de usuario ya existe.";
        return;
    }

    // Guardar el nombre de usuario para evitar duplicados
    localStorage.setItem(username, true);

    // Aquí iría la lógica para crear la cuenta
    // Por ahora simplemente mostramos un mensaje de éxito
    var message = document.getElementById("message");
    message.textContent = "¡Cuenta creada exitosamente!";
    message.style.color = "green";
});

// Función para validar la contraseña
function validatePassword(password) {
    // Requisitos de la contraseña: longitud mínima de 8 caracteres, al menos un número, una letra mayúscula y un carácter especial
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z]).{8,}$/;
    return passwordRegex.test(password);
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
