// Closure que encapsula el manejo de tareas (agregar, obtener y eliminar)
// Las funciones internas comparten el mismo scope y protegen su lógica
const manejarTareas = (function () {

    // Obtiene las tareas guardadas en el Local Storage
    function obtenerTareas() {
        const tareasGuardadas = localStorage.getItem("tareas");
        // Si no hay nada guardado, regresamos un array vacio
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }

    // Guarda el array de tareas en el Local Storage en formato JSON
    function guardarTareas(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Agrega una nueva tarea al array y la guarda
    function agregar(nuevaTarea) {
        const tareas = obtenerTareas();
        tareas.push(nuevaTarea);
        guardarTareas(tareas);
    }

    // Elimina una tarea segun su posicion en el array
    function eliminar(indice) {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1);
        guardarTareas(tareas);
    }

    // Solo estas funciones quedan disponibles fuera del closure
    return {
        obtener: obtenerTareas,
        agregar: agregar,
        eliminar: eliminar
    };

})();

// Muestra las tareas en la pagina, recorriendo el array actual
function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    const tareas = manejarTareas.obtener();

    tareas.forEach(function (tarea, indice) {
        const item = document.createElement("li");
        item.className = "item-tarea";

        item.innerHTML = `
            <span>${tarea}</span>
            <button class="btn-eliminar" onclick="eliminarTarea(${indice})">Eliminar</button>
        `;

        lista.appendChild(item);
    });
}

// Se ejecuta cuando el usuario da clic en "Agregar Tarea"
function agregarTarea() {
    const input = document.getElementById("tarea");
    const valor = input.value.trim();

    if (valor === "") {
        Swal.fire("Atencion", "Escribe una tarea antes de agregarla", "warning");
        return;
    }

    manejarTareas.agregar(valor);
    input.value = "";
    renderizarTareas();
}

// Se ejecuta cuando el usuario da clic en "Eliminar" de una tarea
function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar esta tarea?",
        text: "Esta accion no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire("Eliminada", "La tarea fue eliminada", "success");
        }
    });
}

// Variable global de ejemplo, para mostrar el scope global
let nombreApp = "Gestion de Tareas";

// Cuando la pagina carga, se muestran las tareas que ya existian
document.addEventListener("DOMContentLoaded", function () {
    // "tareas" y "tarea" son variables locales dentro de sus funciones (scope local)
    // "nombreApp" es una variable global, accesible desde cualquier parte del archivo
    console.log(nombreApp, "cargada correctamente");
    renderizarTareas();
});