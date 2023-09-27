$('#tablaArticulos').DataTable().destroy();

$(document).ready(function() {
    $('#tablaArticulos').DataTable( {
        responsive: true,
        order: [[0, 'desc']],
        pageLength: 10,
        scrollX: true,
        dom: 'Bftrip',
        // pagingType: 'full_numbers',
        language: {
         "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },
        buttons:[ 
            {
                    extend:    'excelHtml5',
                    text:      '<i class="fa-regular fa-file-excel fa-xl" style="color: #ffffff;"></i>',
                    titleAttr: 'Exportar a Excel',
                    className: 'btn btn-success',
                    title:     'RELACION  DE  VEHICULOS  Y  POLIZAS  DE  SEGURO  PRESERMAZ (MONTERREY)', 
                    exportOptions: {
                        columns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,]
                    }
            },
            {
                    extend:    'pdfHtml5',
                    text:      '<i class="fa-regular fa-file-pdf fa-xl" style="color: #ffffff;"></i>',
                    titleAttr: 'Exportar a PDF',
                    className: 'btn btn-danger',
                    title:     'RELACION  DE  VEHICULOS  Y  POLIZAS  DE  SEGURO  PRESERMAZ (MONTERREY)',
                    exportOptions: {
                        columns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                    }                    
            },
            {
                    extend:    'print',
                    text:      '<i class="fa-solid fa-print fa-xl" style="color: #ffffff;"></i>',
                    titleAttr: 'Imprimir',
                    className: 'btn btn-info',
                    exportOptions: {
                        columns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                    }
            }
        ]       
    });
});