// CARRITO ------------------------------------ //
const misjugadores = [
    { id: 1, nombre: "karim benzema", precio: 1000.000, imagen: "imagenes/benzema" },
    { id: 2, nombre: "leonel messi", precio: 1000.000, imagen: "imagenes/messi" },
    { id: 3, nombre: "cristiano ronaldo", precio: 1000.000, imagen: "imagenes/cristiano" },
    { id: 4, nombre: "kilian mbappe", precio: 1000.000, imagen: "imagenes/mbappe" },
    { id: 5, nombre: "edem hazard", precio: 1000.000, imagen: "imagenes/hazard" },
    { id: 6, nombre: "bellingan ", precio: 1000.000, imagen: "imagenes/bellingan"},
    { id: 7, nombre: "haland", precio: 1000.000, imagen: "imagenes/haland" },
    { id: 8, nombre: "julian alvarez", precio: 1000.000, imagen: "imagenes/julianalvarez" },
    { id: 9, nombre: "lewandoski", precio: v, imagen: "imagenes/lewandoski" },
    { id: 10, nombre: "kane", precio: 1000.000, imagen: "imagenes/kane" },
    { id: 11, nombre: "kante", precio: 1000.000, imagen: "imagenes/kante "},
    { id: 12, nombre: "stearling", precio: 1000.000, imagen: "imagenes/stearling" },
    { id: 13, nombre: "pogba", precio: 1000.000, imagen: "imagenes/pogba" },
    { id: 14, nombre: "neymar", precio:1000.000, imagen: "imagenes/neymar" },
    { id: 15, nombre: "ramos", precio: 1000.000, imagen: "imagenes/ramos" },
    { id: 16, nombre: "de jong", precio: 1000.000, imagen: "imagenes/dejong" },
    { id: 17, nombre: "morata", precio: 1000.000, imagen: "imagenes/morata" },
    { id: 18, nombre: "mane", precio: 1000.000, imagen: "imagenes/mane"},
    { id: 19, nombre: "salah", precio:1000.000, imagen: "imagenes/zalah" },
    { id: 20, nombre: "reus", precio: 1000.000, imagen: "imagenes/reus" }
]

// INDICAR CANTIDAD DE jugadores DISPONIBLES ----------- //

function crearjugadores(misjugadores) {
    let cantjugadores = $('.titulo > h3')
    cantjugadores.html(`(Tenés ${misjugadores.length} jugadores disponibles)`)
}

crearjugadores(misjugadores)

//AÑADIR jugadores ------------------ //

const agregarjugadores = document.querySelectorAll('#boton')
agregarjugadores.forEach((agregarjugador) => {
    agregarjugador.addEventListener('click', agregarAlClickear)
})

const confirmarCompra = document.querySelector('.confirmarCompra')
confirmarCompra.addEventListener('click', comprar)

const miCarrito = document.querySelector('#carrito')

function agregarAlClickear(event) {
    const button = event.target
    const item = button.closest('.item')

    const itemTitulo = item.querySelector('#titulo').textContent
    const itemPrecio = item.querySelector('#precio').textContent
    const itemImagen = item.querySelector('#imagen').src

    agregarAlCarrito(itemTitulo, itemPrecio, itemImagen)
}

function agregarAlCarrito(itemTitulo, itemPrecio, itemImagen) {

    const elementoCarrito = document.querySelectorAll('.tituloItem')

    for (let i = 0; i < elementoCarrito.length; i++) {
        if (elementoCarrito[i].innerText === itemTitulo) {
            let cantidadElemento = elementoCarrito[i].parentElement.parentElement.parentElement.querySelector('#cantidad')
            cantidadElemento.value++
                actualizarTotalCarrito()
            return
        }

    }
    const filaCarrito = document.createElement('div')

    const contenidoCarrito = `
    <div class="borrar">
    <ul class="carrito" class="list-group mb-3">
        <div class="articulo">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div class="col-sm-4">
                <h6 class="my-0 tituloItem">${itemTitulo}</h6>
                <div class="d-flex align-items-center h-100">
                    <figure>
                        <img src="${itemImagen}" alt="${itemTitulo}" width="50px" height="50px">
                    </figure>
                </div>
            </div>
            <div>
            <input class="col-sm-4" type="number" value="1" id="cantidad">
            <button class="btn btn-danger botonBorrar" type="button">X</button>
        </div>
        <span class="text-muted" id="precio">${itemPrecio}</span>
        </li>
        </div>
    </ul>
    </div>`

    filaCarrito.innerHTML = contenidoCarrito
    miCarrito.append(filaCarrito)

    filaCarrito.querySelector('.botonBorrar').addEventListener('click', borrarItem)

    filaCarrito.querySelector('#cantidad').addEventListener('change', cambiarItem)
    actualizarTotalCarrito()
}

// ACTUALIZAR CARRITO ----------------- //

function actualizarTotalCarrito() {
    let total = 0

    const totalCarrito = document.querySelector('#total')

    const itemsCarrito = document.querySelectorAll('.articulo')

    itemsCarrito.forEach(articulo => {
        const precioItemCarrito = articulo.querySelector('#precio')
        const precioItem = Number(precioItemCarrito.textContent.replace('$', ''))
        const cantidadItem = articulo.querySelector('#cantidad')
        const cantidadItemCarrito = Number(cantidadItem.value)

        total = total + precioItem * cantidadItemCarrito
    })

    totalCarrito.innerHTML = `Total (ARS): $${total}`
}

// BORRAR ITEM DEL CARRITO -------------- //
function borrarItem(event) {
    const clickBoton = event.target

    clickBoton.closest('.borrar').remove()
    actualizarTotalCarrito()
}

// CAMBIAR CANTIDAD DE jugadores ----------- // 
function cambiarItem(event) {
    const tomar = event.target
    if (tomar.value <= 0) {
        tomar.value = 1
    }
    actualizarTotalCarrito()
}

// FINALIZAR COMPRA ----------------------- // 
function comprar() {
    $('.carrito').html('')
    actualizarTotalCarrito()
    alert("Gracias por tu compra! Pronto recibirás el pedido.")
    console.log("Tarea Finalizada");
}


// BUSCADOR ----------------------------------- //

function mostrar() {
    alert("Ups! Pronto tendremos esta información disponible")
}
let buscar = $('#buscador').on('click', mostrar)