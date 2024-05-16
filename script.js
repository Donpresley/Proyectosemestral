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

