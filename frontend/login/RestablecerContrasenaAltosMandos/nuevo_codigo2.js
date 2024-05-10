document.getElementById("reset-password-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
        message.textContent = "Para recuperar su contraseña, comuníquese al: 60515432";
        message.style.color = "green";
});
