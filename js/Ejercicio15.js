let estudiantes = [];

function agregarEstudiante(){
    let nombre = document.getElementById("nombre").value;
    let calificacion = Number(document.getElementById("calificacion").value);
//Validacion del que nombre sea valido
    if (nombre === "") {
        alert("Por favor ingresa el nombre del estudiante.");
        return;
    }

    // VALIDACIÓN 2: que la calificación sea un número válido
    if (document.getElementById("calificacion").value.trim() === "" || isNaN(calificacion)) {
        alert("Por favor ingresa una calificación numérica válida.");
        return;
    }

    let nuevoEstudiante = {
        nombre: nombre, calificacion: calificacion};
        estudiantes.push(nuevoEstudiante);
        // Limpiamos los inputs para que el usuario pueda seguir agregando
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";

    alert(nombre + " fue agregado correctamente.");
    }

    function calcular(){
    // VALIDACIÓN: que haya al menos un estudiante agregado
    if (estudiantes.length === 0) {
        alert("No hay estudiantes agregados todavía.");
        return;
    }

    // 1. PROMEDIO: sumamos todas las calificaciones con reduce() y dividimos entre la cantidad
    let suma = estudiantes.reduce(function(total, estudiante){
        return total + estudiante.calificacion;
    }, 0);
    let promedio = suma / estudiantes.length;

    // 2. Extraemos solo las calificaciones (sin nombres) usando map()
    let calificaciones = estudiantes.map(function(estudiante){
        return estudiante.calificacion;
    });

    // 3. Usamos Math.max/min con spread operator para sacar la nota más alta y más baja
    let calificacionMaxima = Math.max(...calificaciones);
    let calificacionMinima = Math.min(...calificaciones);

    // 4. Buscamos el objeto completo (con nombre) que tiene esa calificación
    let estudianteMax = estudiantes.find(function(estudiante){
        return estudiante.calificacion === calificacionMaxima;
    });
    let estudianteMin = estudiantes.find(function(estudiante){
        return estudiante.calificacion === calificacionMinima;
    });

    // 5. Mostramos los resultados en los inputs readonly
    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("masAlta").value = estudianteMax.nombre + " (" + estudianteMax.calificacion + ")";
    document.getElementById("masBaja").value = estudianteMin.nombre + " (" + estudianteMin.calificacion + ")";
}

function limpiarTodo(){
estudiantes = [];
}
