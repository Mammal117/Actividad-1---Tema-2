function convertir() {

    var num1 = document.getElementById("numero").value;

    // Validar que el campo no esté vacío
    if (num1.trim() == "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    // Validar que sea un número
    if (isNaN(num1)) {
        alert("Solo se permiten valores numéricos.");
        return;
    }

    // Conversión
    var resultado = (parseFloat(num1) * 9 / 5) + 32;

    // Mostrar resultado
    document.getElementById("resultado").value = resultado + " °F";
}