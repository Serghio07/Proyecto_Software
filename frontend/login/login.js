document.getElementById("login-btn").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica de autenticación
    // Por ahora simplemente imprimimos los valores en la consola
    console.log("Username: " + username);
    console.log("Password: " + password);
});
