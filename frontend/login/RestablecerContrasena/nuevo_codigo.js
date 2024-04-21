document.getElementById("reset-password-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Verificar las credenciales del usuario
    if (username === "Gerente" && email === "PruebaSIS@gerente.com") {
        // Si las credenciales son correctas, mostrar una ventana emergente para ingresar una nueva contraseña
        var newPassword = prompt("Ingrese su nueva contraseña:");
        
        // Validar la nueva contraseña
        if (newPassword !== null && newPassword !== "") {
            // Mostrar la ventana emergente para confirmar la nueva contraseña
            var confirmNewPassword = prompt("Confirme su nueva contraseña:");

            // Verificar si la contraseña coincide con la confirmación
            if (confirmNewPassword !== null && confirmNewPassword !== "") {
                if (newPassword === confirmNewPassword) {
                    // Validar la contraseña
                    if (validatePassword(newPassword)) {
                        // Mostrar mensaje de éxito
                        var message = document.getElementById("message");
                        message.textContent = "Contraseña nueva guardada";
                    } else {
                        // Mostrar mensaje de error si la contraseña no cumple con los requisitos
                        var message = document.getElementById("message");
                        message.textContent = "La contraseña no cumple con los requisitos.";
                    }
                } else {
                    // Mostrar mensaje de error si la contraseña no coincide con la confirmación
                    var message = document.getElementById("message");
                    message.textContent = "Las contraseñas no coinciden.";
                }
            } else {
                // Mostrar mensaje si el usuario cancela la confirmación de la contraseña
                var message = document.getElementById("message");
                message.textContent = "Debe confirmar su nueva contraseña.";
            }
        } else {
            // Mostrar mensaje si el usuario cancela la entrada de la nueva contraseña
            var message = document.getElementById("message");
            message.textContent = "Debe ingresar una nueva contraseña.";
        }
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        var message = document.getElementById("message");
        message.textContent = "Usuario o correo electrónico incorrectos.";
    }
});

// Función para validar la contraseña
function validatePassword(password) {
    // Requisitos de la contraseña: longitud mínima de 8 caracteres, al menos un número, una letra mayúscula y un carácter especial
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z]).{8,}$/;
    return passwordRegex.test(password);
}
