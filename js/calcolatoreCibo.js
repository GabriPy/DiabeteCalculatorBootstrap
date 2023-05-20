function showCalculator() {
    var calcolatoreCibo = document.getElementById("calcolatoreCiboPeso");
    var iconaCalcolatrice = document.getElementById("iconaCalcolatrice");
    if (calcolatoreCibo.classList.contains("hidden")) {
        calcolatoreCibo.classList.remove("hidden");
        iconaCalcolatrice.classList.remove("fa-calculator");
        iconaCalcolatrice.classList.add("fa-xmark")
    } else {
        calcolatoreCibo.classList.add("hidden");
        iconaCalcolatrice.classList.remove("fa-xmark");
        iconaCalcolatrice.classList.add("fa-calculator");
    }
}

function calcoloCibo() {
    var spanRisultato = document.getElementById("spanRisultato");
    var carbo = document.getElementById("inputcarbo").value;
    var peso = document.getElementById("inputpeso").value;

    var risultato = Math.round(carbo * (peso / 100))

    spanRisultato.innerHTML = "= " + risultato + " g di carboidrati";
}