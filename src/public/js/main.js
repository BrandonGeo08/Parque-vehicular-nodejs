// Variables
const url = 'http://localhost:4000/api/data/'
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const clvEmpleado = document.getElementById('clvEmpleado')
const sucursal = document.getElementById('sucursal')
const nomEmpleado = document.getElementById('nomEmpleado')
const apPaterno = document.getElementById('apPaterno')
const apMaterno = document.getElementById('apMaterno')
const yearModelo = document.getElementById('yearModelo')
const modelo = document.getElementById('modelo')
const colorMoto = document.getElementById('colorMoto')
const numSerie = document.getElementById('numSerie')
const numPlacas = document.getElementById('numPlacas')
const numPoliza = document.getElementById('numPoliza')
const numInciso = document.getElementById('numInciso')
const polizaVencimiento = document.getElementById('polizaVencimiento')
const numFactura = document.getElementById('numFactura')
const fechaFactura = document.getElementById('fechaFactura')
const subtotalFactura = document.getElementById('subtotalFactura')
const ivaFactura = document.getElementById('ivaFactura')
const totalFactura = document.getElementById('totalFactura')
const aseguradora = document.getElementById('aseguradora')
const estadoPoliza = document.getElementById('estadoPoliza')
const observaciones = document.getElementById('observaciones')
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    clvEmpleado.value = ''
    sucursal.value = ''
    nomEmpleado.value = ''
    apPaterno.value = '',
    apMaterno.value = '', 
    yearModelo.value = '',
    modelo.value = '',
    colorMoto.value = '',
    numSerie.value = '',
    numPlacas.value = '',   
    numPoliza.value = '',
    numInciso.value = '',
    polizaVencimiento.value = '',
    numFactura.value = '',
    fechaFactura.value = '',
    subtotalFactura.value = '',
    ivaFactura.value = '',
    totalFactura.value = '',
    aseguradora.value = '',
    estadoPoliza.value = '',
    observaciones.value = '',
    modalArticulo.show()
    opcion = 'crear'
})


const mostrar = (datos) => {
    try {
        datos.forEach(datos => {
            resultados += `
                    <tr >
                        <td>${datos.id}</td>
                        <td>${datos.clvEmpleado}</td>
                        <td>${datos.sucursal}</td>
                        <td>${datos.nomEmpleado}</td>
                        <td>${datos.apPaterno}</td>
                        <td>${datos.apMaterno}</td>
                        <td>${datos.yearModelo}</td>
                        <td>${datos.modelo}</td>
                        <td>${datos.colorMoto}</td>
                        <td>${datos.numSerie}</td>
                        <td>${datos.numPlacas}</td>
                        <td>${datos.numPoliza}</td>
                        <td>${datos.numInciso}</td>
                        <td>${datos.polizaVencimiento}</td>
                        <td>${datos.numFactura}</td>
                        <td>${datos.fechaFactura}</td>
                        <td>${datos.subtotalFactura}</td>
                        <td>${datos.ivaFactura}</td>
                        <td>${datos.totalFactura}</td>
                        <td>${datos.aseguradora}</td>
                        <td>${datos.estadoPoliza}</td>
                        <td>${datos.observaciones}</td>
                        <td class = "text-center"><a class="btnEditar btn btn-primary"><i class="fa-solid fa-pen-to-square fa-xs" style="color: #ffffff;"></i></a> </td>
                        <td class = "text-center"><a class="btnBorrar btn btn-danger"><i class="fa-solid fa-delete-left fa-xs" style="color: #ffffff;"></i></a></td>   
                    </tr>`;
        });
        tbody_mostrar.innerHTML = resultados
    } catch (ex) {
        alert(ex);
    }
}


// Procedimientos Mostrar
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch( error => console.log(error))


const on = (element, event, selector, handler) =>{
    // console.log(element)
    // console.log(event)
    // console.log(selector)
    // console.log(handler)
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}


// Procedimiento borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("Quiere eliminar este dato?",
    function(){
        fetch(url+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(()=>location.reload())
        alertify.confirm("Ok")
    },
    function(){
        alertify.error("Cancelar")
    })
    
})


// Procedimiento editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const clvEmpleadoForm = fila.children[1].innerHTML
    const sucursalForm = fila.children[2].innerHTML
    const nomEmpleadoForm = fila.children[3].innerHTML
    const apPaternoForm = fila.children[4].innerHTML
    const apMaternoForm = fila.children[5].innerHTML
    const yearModeloForm = fila.children[6].innerHTML
    const modeloForm = fila.children[7].innerHTML
    const colorMotoForm = fila.children[8].innerHTML
    const numSerieForm = fila.children[9].innerHTML
    const numPlacasForm = fila.children[10].innerHTML
    const numPolizaForm = fila.children[11].innerHTML
    const numIncisoForm = fila.children[12].innerHTML
    const polizaVencimientoForm = fila.children[13].innerHTML
    const numFacturaForm = fila.children[14].innerHTML
    const fechaFacturaForm = fila.children[15].innerHTML
    const subtotalFacturaForm = fila.children[16].innerHTML
    const ivaFacturaForm = fila.children[17].innerHTML
    const totalFacturaForm = fila.children[18].innerHTML
    const aseguradoraForm = fila.children[19].innerHTML
    const estadoPolizaForm = fila.children[20].innerHTML
    const observacionesForm = fila.children[21].innerHTML

    clvEmpleado.value =  clvEmpleadoForm
    sucursal.value =  sucursalForm
    nomEmpleado.value =  nomEmpleadoForm
    apPaterno.value = apPaternoForm
    apMaterno.value = apMaternoForm
    yearModelo.value = yearModeloForm
    modelo.value = modeloForm
    colorMoto.value = colorMotoForm
    numSerie.value = numSerieForm
    numPlacas.value = numPlacasForm
    numPoliza.value = numPolizaForm
    numInciso.value = numIncisoForm
    polizaVencimiento.value = polizaVencimientoForm
    numFactura.value = numFacturaForm
    fechaFactura.value = fechaFacturaForm
    subtotalFactura.value = subtotalFacturaForm
    ivaFactura.value = ivaFacturaForm
    totalFactura.value = totalFacturaForm
    aseguradora.value = aseguradoraForm
    estadoPoliza.value = estadoPolizaForm
    observaciones.value = observacionesForm
    opcion = 'editar'
    modalArticulo.show()
})

//Procedimiento crear y editar
formArticulo.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        //console.log('OPCION CREAR')
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                clvEmpleado:clvEmpleado.value,
                sucursal:sucursal.value,
                nomEmpleado:nomEmpleado.value,
                apPaterno:apPaterno.value,
                apMaterno:apMaterno.value, 
                yearModelo:yearModelo.value,
                modelo:modelo.value,
                colorMoto:colorMoto.value,
                numSerie:numSerie.value,
                numPlacas:numPlacas.value,   
                numPoliza:numPoliza.value,
                numInciso:numInciso.value ,
                polizaVencimiento:polizaVencimiento.value,
                numFactura:numFactura.value,
                fechaFactura:fechaFactura.value,
                subtotalFactura:subtotalFactura.value,
                ivaFactura:ivaFactura.value,
                totalFactura:totalFactura.value,
                aseguradora:aseguradora.value,
                estadoPoliza:estadoPoliza.value,
                observaciones:observaciones.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoDato = []
            nuevoDato.push(data)
            mostrar(nuevoDato)
        })
    }
    modalArticulo.hide()
    if(opcion=='editar'){
        fetch(url+idForm,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                clvEmpleado:clvEmpleado.value,
                sucursal:sucursal.value,
                nomEmpleado:nomEmpleado.value,
                apPaterno:apPaterno.value,
                apMaterno:apMaterno.value, 
                yearModelo:yearModelo.value,
                modelo:modelo.value,
                colorMoto:colorMoto.value,
                numSerie:numSerie.value,
                numPlacas:numPlacas.value,
                numPoliza:numPoliza.value,
                numInciso:numInciso.value ,
                polizaVencimiento:polizaVencimiento.value,
                numFactura:numFactura.value,
                fechaFactura:fechaFactura.value,
                subtotalFactura:subtotalFactura.value,
                ivaFactura:ivaFactura.value,
                totalFactura:totalFactura.value,
                aseguradora:aseguradora.value,
                estadoPoliza:estadoPoliza.value,
                observaciones:observaciones.value
            })
        })
        .then( response => response.json())
        .then( response => location.reload())
    }
    modalArticulo.hide()
})