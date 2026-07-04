function convertir() {

    // Obtener el valor del input
    let kilometros = document.getElementById("numero").value;

    // Validar que el campo no esté vacío
    if (kilometros === "") {
        alert("Por favor, ingresa una cantidad en kilómetros.");
        document.getElementById("resultado").value = "";
        return;
    }

    // Convertir a número
    kilometros = Number(kilometros);

    // Validar que sea un número válido
    if (isNaN(kilometros)) {
        alert("Debes ingresar un valor numérico.");
        document.getElementById("resultado").value = "";
        return;
    }

    // Conversión de kilómetros a millas
    let millas = kilometros * 0.621371;

    // Mostrar el resultado con 2 decimales
    document.getElementById("resultado").value = millas.toFixed(2) + " mi";
}