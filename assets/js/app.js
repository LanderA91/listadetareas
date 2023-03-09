const formulario = document.querySelector('#formulario')
const agregarTarea = document.querySelector('#agregarTarea')
let listaTareas = document.querySelector('#listaTareas')
let arrayTareas = []
let totalTareas = document.getElementById('totalTareas')
let totalRealizadas = document.getElementById('totalRealizadas')


function actualizarPagina(){
    let nuevoArraySelect = []
    totalRealizadas.innerHTML = nuevoArraySelect.length
    let html = ""
    for (let tarea of arrayTareas){
        html += 
        `
        <div id="Tarea" class="d-flex align-items-center gap-3 m-3 justify-content-between">
            <h4 class="m-0 texto1 fs-5">${tarea.nombre}</h4>
            <div class="d-flex align-items-center gap-3">
                <input type="checkbox" class="checkbox">
                <button type="button" class="btn btn-light justify-content-end" onclick="borrar(${tarea.id})">
                ❌
                </button>
            </div>
        </div>
        `
    }

    listaTareas.innerHTML = html


    const checkboxes = document.querySelectorAll(".checkbox")
    const checkboxesArray = Array.from(checkboxes)
    checkboxes.forEach((checkboxSelect) => {
        checkboxSelect.addEventListener('click', () => {
            let checkeado = checkboxSelect.checked

            function pintarRealizadas(){
                nuevoArraySelect = checkboxesArray.filter(x => x.checked == true)
                totalRealizadas.innerHTML = nuevoArraySelect.length
            }
            
            if (checkeado == true){
                pintarRealizadas()
            }else if (checkeado == false){
                pintarRealizadas()
            }
        })
    })
        
}



function actualizarTareas(){
    totalTareas.innerHTML = arrayTareas.length
}

formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    const nuevoValor = {id: Date.now(), nombre: agregarTarea.value, completado: false}

    arrayTareas.push(nuevoValor)

    agregarTarea.value = ""

    actualizarPagina()
    actualizarTareas()

})

function borrar(id){
    const index = arrayTareas.findIndex((elemento) => elemento.id == id)
    arrayTareas.splice(index,1)

    actualizarPagina()
    actualizarTareas()
}

function tareaLista(estado){
    let estadoTarea = estado
    estadoTarea = true
}