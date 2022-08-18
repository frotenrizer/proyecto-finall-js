// BUSCADOR ----------------------------------- //

function mostrar() {
    alert("Ups! Pronto tendremos esta información disponible")
}
let buscar = $('#buscador').on('click', mostrar)

// CARGAR jugadores DESTACADOS ---------------- // 

const URL = "js/jugadores.JSON"
const contenedorjugadores = $('#contenedorjugadores')

$.getJSON(URL, (response, status) => {
    if (status === "success") {
        response.forEach(function(jugador) {
            contenedorjugadores.append(`
                    <div class="item selfie col-lg-3 col-sm-6">
                        <figure>
                            <img src="${jugador.imagen}" alt="${jugadoro.nombre}" width="220px" height="200px">
                            <figcaption>
                                <p>${jugador.nombre} (${jugador.promocion})</p>
                            </figcaption>
                        </figure>
                    </div>
            `)
        })
    }
}).fail((error) => {
    console.log(error)
}).always(() => {
    console.log("Tarea finalizada");
})
