document.getElementById("reset-password-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Verificar si el usuario tiene la terminación @usuario en el correo
    if (email.endsWith("@usuario.com")) {
        // Verificar si el usuario es "camilo" y el correo es "rm144@usuario.com"
        if (username === "camilo" && email === "rm144@usuario.com") {
            // Mostrar mensaje con el número de contacto para recuperar la contraseña
            var message = document.getElementById("message");
            message.textContent = "Para recuperar su contraseña, comuníquese al: 60515432";
        } else {
            // Mostrar mensaje de error si las credenciales no son correctas
            var message = document.getElementById("message");
            message.textContent = "Usuario o correo electrónico incorrectos.";
        }
    } else {
        // Mostrar mensaje de error si el correo no tiene la terminación correcta
        var message = document.getElementById("message");
        message.textContent = "Solo los usuarios con correo '@usuario.com' pueden recuperar su contraseña por aquí.";
    }
});
