function convertir(){
let cadena =document.getElementById("numero").value;
if (cadena.trim() === ""){
    alert("No has ingresado ningun numero o cadena");
    return;
}
let arregloTexto = cadena.split(",");
let numeros = arregloTexto.map(function(valor){return Number(valor.trim());
});
    let hayInvalidos = numeros.some(function(n) {
        return isNaN(n);
    });

if (hayInvalidos || numeros.length === 0) {
        alert("Por favor ingresa solo números separados por comas. Ejemplo: 12,10,34,23");
        return;    }
       let maximo= Math.max(...numeros);
       let minimo= Math.min(...numeros);
       let suma = numeros.reduce(function(acc, valor){
        return acc + valor;
       },0);
       
       let promedio = suma / numeros.length;
       document.getElementById("max").value = maximo;
       document.getElementById("min").value = minimo;
       document.getElementById("prom").value = promedio.toFixed(2);// 2 decimales
}