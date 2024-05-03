/* document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica de autenticación
    // Por ahora simplemente imprimimos los valores en la consola
    console.log("Correo Electrónico: " + email);
    console.log("Usuario: " + username);
    console.log("Contraseña: " + password);
    
    // Aquí puedes agregar la lógica para redirigir a las páginas correspondientes
    // dependiendo de las credenciales ingresadas
    if (username === "Gerente" && password === "1234Gerente$" && email === "PruebaSIS@gerente.com") {
        window.location.href = "../MenuGerente/menuGerente.html";
    } else if (username === "cliente" && password === "5678Usuario$" && email === "PruebaSIS@usuario.com") {
        window.location.href = "../MenuCliente/menu.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});
 */