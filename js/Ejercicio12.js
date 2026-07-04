function convertir() {

    const mxn = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (document.getElementById("numero").value === "") {
        alert("Ingresa una cantidad.");
        resultado.value = "";
        return;
    }

    if (isNaN(mxn)) {
        alert("El valor debe ser numérico.");
        resultado.value = "";
        return;
    }

    const tasaCambio = 0.055;
    const usd = mxn * tasaCambio;

    resultado.value = usd.toFixed(2) + " USD";
}