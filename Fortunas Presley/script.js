
/* REGISTRO */ 

function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var rut = document.getElementById("rut").value;
    var appaterno = document.getElementById("appaterno").value;
    var apmaterno = document.getElementById("apmaterno").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("select").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var profesion = document.getElementById("profesion").value;

    var errorNombre = document.getElementById("error-nombre");
    var errorRut = document.getElementById("error-rut");
    var errorAppaterno = document.getElementById("error-appaterno");
    var errorApmaterno = document.getElementById("error-apmaterno");
    var errorFecha = document.getElementById("error-fecha");
    var errorGenero = document.getElementById("error-genero");
    var errorEmail = document.getElementById("error-email");
    var errorCelular = document.getElementById("error-celular");
    var errorProfesion = document.getElementById("error-profesion");

    var mensajesError = [];

    // Limpiar mensajes de error anteriores
    errorNombre.textContent = "";
    errorRut.textContent = "";
    errorAppaterno.textContent = "";
    errorApmaterno.textContent = "";
    errorFecha.textContent = "";
    errorGenero.textContent = "";
    errorEmail.textContent = "";
    errorCelular.textContent = "";
    errorProfesion.textContent = "";

    // Validaciones
    if (nombre === null || nombre === "") {
        mensajesError.push("Ingrese su nombre");
        errorNombre.textContent = "Ingrese su nombre";
    }
    if (rut === null || rut === "") {
        mensajesError.push("Ingrese su rut");
        errorRut.textContent = "Ingrese su rut";
    }
    if (appaterno === null || appaterno === "") {
        mensajesError.push("Ingrese su apellido paterno");
        errorAppaterno.textContent = "Ingrese su apellido paterno";
    }
    if (apmaterno === null || apmaterno === "") {
        mensajesError.push("Ingrese su apellido materno");
        errorApmaterno.textContent = "Ingrese su apellido materno";
    }
    if (fecha === null || fecha === "") {
        mensajesError.push("Ingrese su fecha de nacimiento");
        errorFecha.textContent = "Ingrese su fecha de nacimiento";
    } else {
        var hoy = new Date();
        var fechaNacimiento = new Date(fecha);
        var edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edadCalculada--;
        }
        if (edadCalculada < 18) {
            mensajesError.push("Edad no permitida. Debe ser mayor de 18 años.");
            errorFecha.textContent = "Edad no permitida. Debe ser mayor de 18 años.";
        }
    }
    if (genero === null || genero === "" || genero == "99") {
        mensajesError.push("Escoja su genero");
        errorGenero.textContent = "Escoja su genero";
    }
    if (email === null || email === "") {
        mensajesError.push("Ingrese su correo electronico");
        errorEmail.textContent = "Ingrese su correo electronico";
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajesError.push("Correo electrónico no válido");
            errorEmail.textContent = "Correo electrónico no válido";
        }
    }
    if (celular === null || celular === "") {
        mensajesError.push("Ingrese su número celular");
        errorCelular.textContent = "Ingrese su número celular";
    }
    if (profesion === null || profesion === "") {
        mensajesError.push("Ingrese su profesion");
        errorProfesion.textContent = "Ingrese su profesion";
    }

    // Evitar que el formulario se envíe si hay errores
    if (mensajesError.length > 0) {
        return false;
    }
}


/* INICIAR SESION */

function enviarFormulario2() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    
    var errorEmail = document.getElementById("error-email");
    var errorContraseña = document.getElementById("error-contraseña");

    var mensajesError = [];

    // Limpiar mensajes de error anteriores
    errorEmail.textContent = "";
    errorContraseña.textContent = "";

    // Validaciones
    if (email === null || email === "") {
        mensajesError.push("Ingrese su correo electronico");
        errorEmail.textContent = "Ingrese su correo electronico";
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajesError.push("Correo electrónico no válido");
            errorEmail.textContent = "Correo electrónico no válido";
        }
    }
    if (contraseña === null || contraseña === "") {
        mensajesError.push("Ingrese su contraseña");
        errorContraseña.textContent = "Ingrese su contraseña";
    }
    // Evitar que el formulario se envíe si hay errores
    if (mensajesError.length > 0) {
        return false;
    }
}


/* JUEGO DE LA MONEDA */

var resultDisplay = document.getElementById("result");
var balanceDisplay = document.getElementById("balance-value");
var balance = 100;

function flipCoin(playerChoice) {
    var coin = document.getElementById("coin");
    coin.classList.remove("heads", "tails");
    coin.style.display = "block"; // Mostrar la moneda antes de girar

    // Obtener la opción que no ha elegido el jugador
    var options = ["heads", "tails"];
    var index = options.indexOf(playerChoice);
    var computerChoice = options[index === 0 ? 1 : 0];

    // Girar la moneda con la opción elegida por la computadora
    setTimeout(function() {
        coin.classList.add(computerChoice);
        displayResult(computerChoice);
        setTimeout(function() {
            coin.style.display = "none"; // Ocultar la moneda después del giro
        }, 1500); // Retraso para ocultar la moneda después del giro (1.5 segundos)
    }, 50); // Retraso para agregar la clase de resultado y mostrar el resultado
}

function displayResult(result) {
    resultDisplay.textContent = "Resultado: " + (result === "heads" ? "Cara" : "Cruz");
    var playerChoice = document.querySelector(".selected").getAttribute("data-result");
    if (result === playerChoice) {
        resultDisplay.textContent += " - ¡Ganaste!";
        balance += 10;
    } else {
        resultDisplay.textContent += " - ¡Perdiste!";
        balance -= 10;
    }
    balanceDisplay.textContent = balance;
}

function reloadBalance() {
    balance = 100;
    balanceDisplay.textContent = balance;
    resultDisplay.textContent = "";
    document.querySelectorAll(".bet").forEach(function(button) {
        button.classList.remove("selected");
    });
}

document.querySelectorAll(".bet").forEach(function(button) {
    button.addEventListener("click", function() {
        if (!this.classList.contains("selected")) {
            document.querySelectorAll(".bet").forEach(function(btn) {
                btn.classList.remove("selected");
            });
            this.classList.add("selected");
        }
    });
});

document.getElementById("reloadButton").addEventListener("click", reloadBalance);
document.querySelectorAll(".bet").forEach(function(button) {
    button.addEventListener("click", function() {
        var playerChoice = this.getAttribute("data-result");
        flipCoin(playerChoice);
    });
});


/* SOLICITUD AYUDA */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ajwt33u';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

