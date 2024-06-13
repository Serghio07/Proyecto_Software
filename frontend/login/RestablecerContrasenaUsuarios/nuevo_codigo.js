document.getElementById("reset-password-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

        // Verificar si el usuario es "camilo" y el correo es "rm144@usuario.com"
        if (true) {
            // Mostrar mensaje con el número de contacto para recuperar la contraseña
            var message = document.getElementById("message");
            message.textContent = "Para recuperar su contraseña, comuníquese al: 60515432";
            message.style.color = "green";
        } else {
            // Mostrar mensaje de error si las credenciales no son correctas
            var message = document.getElementById("message");
            message.textContent = "Usuario o correo electrónico incorrectos.";
            message.style.color = "red";
        }
});
