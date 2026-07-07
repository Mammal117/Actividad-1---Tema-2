// Seleccionar los elementos importantes del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Funcion para agregar un nuevo elemento a la lista
function agregarElemento() {
    const texto = input.value.trim(); // Obtiene el valor del input y elimina espacios innecesarios

    if (texto !== '') {
        // Crear un nuevo elemento 'li' usando clases de Bootstrap
        const li = document.createElement('li');
        li.classList.add('list-group-item'); // Le da el estilo de Bootstrap al li

        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); // Agrega el texto al li

        // Crear el boton de eliminar con clases de Bootstrap
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        botonEliminar.addEventListener('click', function () {
            // Antes de eliminar, pedimos confirmacion con SweetAlert2
            Swal.fire({
                title: '¿Eliminar este elemento?',
                text: 'Esta accion no se puede deshacer',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'Cancelar'
            }).then(function (resultado) {
                if (resultado.isConfirmed) {
                    li.remove(); // Eliminar el li al confirmar
                    Swal.fire('Eliminado', 'El elemento fue eliminado', 'success');
                }
            });
        });

        // Añadir el boton al li
        li.appendChild(botonEliminar);

        // Agregar el li a la lista
        lista.appendChild(li);

        // Limpiar el campo de texto
        input.value = '';

        // Aviso de exito al agregar
        Swal.fire('Agregado', 'El elemento se agrego a la lista', 'success');
    } else {
        Swal.fire('Atencion', 'Escribe algo para agregar a la lista', 'warning');
    }
}

// Asignar la funcion al boton de agregar
botonAgregar.addEventListener('click', agregarElemento);