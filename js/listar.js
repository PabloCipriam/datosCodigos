const Productos = JSON.parse(localStorage.getItem('productos')) || []

const datosTabla = document.querySelector('#cuerpo-tabla')

/* DATATABLE */
$(document).ready(function () {
    $('#myTable').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        pageLength: 8,
        lengthMenu: [8, 10, 15, 20],
        columnDefs: [
            { className: "text-center", targets: [0, 1] },
            { orderable: false, targets: [0] }
        ],
        order: [[2, 'asc']]
    });
});

/* LISTAR DATOS */
const cargarDatos = () => {
    var html = ''


    Productos.forEach(function (producto, index) {
        html += '<tr>'
        html += '<td scope="row">' + producto.codigo + '</td>'
        html += '<td>' + producto.producto + '</td>'
        html += '</tr>'
    });

    datosTabla.innerHTML = html

}

cargarDatos()
