function convertir() {

    // Capturar el valor ingresado
    var edad = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    // Validar que el campo no esté vacío
    if (edad === "") {
        alert("Por favor, ingresa tu edad.");
        resultado.value = "";
        return;
    }

    // Convertir el valor a número
    edad = Number(edad);

    // Validar que sea un número positivo
    if (isNaN(edad) || edad < 0) {
        alert("Ingresa una edad válida (número positivo).");
        resultado.value = "";
        return;
    }

    // Verificar si puede votar
    if (edad >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }

}