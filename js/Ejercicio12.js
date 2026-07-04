function convertir() {

    // 1. Obtener el valor ingresado
    let mxn = document.getElementById("mxn").value;

    // 2. Validar que no esté vacío
    if (mxn === "") {
        alert("Por favor, ingresa una cantidad en pesos mexicanos.");
        document.getElementById("resultado").value = "";
        return;
    }

    // 3. Convertir a número
    mxn = Number(mxn);

    // 4. Validar que sea número válido
    if (isNaN(mxn)) {
        alert("El valor ingresado debe ser numérico.");
        document.getElementById("resultado").value = "";
        return;
    }

    // 5. Validar que sea positivo
    if (mxn < 0) {
        alert("El valor debe ser un número positivo.");
        document.getElementById("resultado").value = "";
        return;
    }

    // 6. Tasa de cambio (MXN a USD)
    const tasaCambio = 0.055;

    // 7. Conversión
    let usd = mxn * tasaCambio;

    // 8. Mostrar resultado en el input readonly
    document.getElementById("resultado").value = usd.toFixed(2) + " USD";
}