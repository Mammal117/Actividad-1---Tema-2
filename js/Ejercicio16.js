const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;

    if (valor1 === "" || valor2 === "") {
        Swal.fire({
            icon: "warning",
            title: "Faltan datos",
            text: "Debes ingresar ambos números antes de continuar."
        });
        return;
    }

    let numero1 = parseFloat(valor1);
    let numero2 = parseFloat(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Valor inválido",
            text: "Por favor ingresa solo números."
        });
        return;
    }

    let resultado;

    switch(operacion) {
        case 'suma':
            resultado = sumar(numero1, numero2);
            break;
        case 'resta':
            resultado = restar(numero1, numero2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(numero1, numero2);
            break;
        case 'division':
            resultado = dividir(numero1, numero2);
            if (resultado === 'Error: División por cero') {
                Swal.fire({
                    icon: "error",
                    title: "División inválida",
                    text: "No se puede dividir entre cero."
                });
                return;
            }
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Operación no reconocida",
                text: "Ocurrió un error con la operación seleccionada."
            });
            return;
    }

    document.getElementById("resultado").value = resultado;
    console.log(resultado);
};