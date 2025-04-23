
const correo = "raul@gmail.com"
const contrasena = 12345;
let log = document.getElementById("loguearse");

log.addEventListener("click", function (event) {
    event.preventDefault();
    let mail = document.getElementById("email1")
    let contrasen = document.getElementById("password1")
    console.log(mail.value, contrasen.value)

    if (mail.value == correo && contrasen.value == contrasena) {
        // window.open("administrador.html", "_self", "")
        localStorage.setItem("logueado", "true");
        window.location.href = "administrador.html";
    } else {
        window.alert("datos incorrectos");
        document.getElementById("email1").value = ""
        document.getElementById("password1").value = ""
    }
})






function cerrarSesion() {
    localStorage.removeItem("logueado");
    window.location.href = "index.html";
}







