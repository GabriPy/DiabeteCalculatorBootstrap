let assorbimentoInsulinaCarboidrati = 8;

function pressInsulina() {

    var pulsanteInsulina = document.getElementById("buttonInsulina");


    var rigaCorrezione = document.getElementById("rigaCorrezione");
    var rigaImpostazioni = document.getElementById("rigaImpostazioni");
    var spanScrittaInsulinaBottone = document.getElementById("spanScrittaInsulinaBottone");
    var iconaScrittaInsulinaBottone = document.getElementById("iconaScrittaInsulinaBottone");

    var calcolatoreInsulina = document.getElementById("calcolatoreInsulina");

    if (pulsanteInsulina.classList.contains("btnentra")) {
        rigaCorrezione.classList.add("hidden");
        rigaImpostazioni.classList.add("hidden");
        calcolatoreInsulina.classList.remove("hidden");
        pulsanteInsulina.classList.remove("btnentra");
        spanScrittaInsulinaBottone.classList.add("hidden");
        iconaScrittaInsulinaBottone.classList.remove("hidden");
    } else {
        rigaCorrezione.classList.remove("hidden");
        rigaImpostazioni.classList.remove("hidden");
        calcolatoreInsulina.classList.add("hidden");
        pulsanteInsulina.classList.add("btnentra");
        spanScrittaInsulinaBottone.classList.remove("hidden");
        iconaScrittaInsulinaBottone.classList.add("hidden");

    }
}

function pressCalcolaInsulina() {
    var carboidrati = document.getElementById('inputCarboidrati').value;
    var insulina = Math.round((carboidrati / assorbimentoInsulinaCarboidrati) * 2) / 2;
    var spanRisultatoInsulina = document.getElementById("risultatoInsulina");
    var alertErrore0Carbo = document.getElementById("errore0carboidrati");

    var testo = "Devi fare " + insulina + " unita'.";


    if (carboidrati != 0) {
        alertErrore0Carbo.classList.add("hidden");
        spanRisultatoInsulina.innerHTML = testo;
    } else {
        alertErrore0Carbo.classList.remove("hidden");
        console.log("CHO Must != 0")
    }

}

function pressCorrezione() {
    
}