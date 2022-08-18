// CONSULTAS USUARIOS y ARRAY CONSULTAS ------------------------ //

class Consulta {
    constructor(nombre, club, telefono, email, comentarios) {
        this.nombre = nombre;
        this.club = club;
        this.telefono = telefono;
        this.email = email;
        this.comentarios = comentarios;
    }
}

const consultas = []

// MOSTRAR CONSULTA ---------------------------- //

function mostrarDatos() {

    const nombre = $('#nombre').val()
    const club = $('#club').val()
    const telefono = $('#telefono').val()
    const email = $('#email').val()
    const comentarios = $('#comentarios').val()

    let consulta = new Consulta(nombre, club, telefono, email, comentarios)

    localStorage.setItem("consulta", JSON.stringify(consulta))

    imprimir()

}

if (localStorage.getItem("consulta") != null) {
    imprimir()
} else {
    console.log("Prueba")
}

function imprimir() {
    let dato = JSON.parse(localStorage.getItem("consulta"))

    let parrafo = $('<p id="mostrarTexto"></p>').text(`Hola, tu nombre es: ${dato.nombre} ${dato.apellido}, tu telefono es ${dato.telefono} y tu correo es: ${dato.email}, además agregaste estos comentarios: ${dato.comentarios}.`)
    $('p').attr('id', 'mostrarTexto')
    $('body').append(parrafo)
}

let botonEnviar = $('#btnEnviar').on('click', mostrarDatos)

// BUSCADOR ----------------------------------- //

function mostrar() {
    alert("Ups! Pronto tendremos esta información disponible")
}
let buscar = $('#buscador').on('click', mostrar)