//localStorage //

 let player = "player"
 localStorage.setItem("cantidad de jugadres", 20)
 

let btnbocamode = document.getElementById("botonbtnprimary")
let btnrivermode = document.getElementById("botondanger")

let bocaMode
console.log(localStorage.getItem("primary"))
if(localStorage.getItem("primary")){
    primary = localStorage.getItem("prymary")
}else{
    console.log("entra primera vez")
    localStorage.setItem("primary", "danger")
} 

if(primary == "blue"){
    document.body.classList.add("blue")
}

btnbocaMode.addEventListener("click", ()=>{
    // document.body.style.backgroundColor= "black"
    // document.body.style.color = "antiquewhite"
    document.body.classList.add("bocaMode")
    localStorage.setItem("bocaMode", "blue")

})
btnriverMode.addEventListener("click", ()=>{
    // document.body.style.backgroundColor= "antiquewhite"
    // document.body.style.color = "black"
    document.body.classList.remove("bocaMode")
    localStorage.setItem("bocaMode", "rivermode")
})

let eliminarModo = document.getElementById("eliminarMode")
eliminarModo.addEventListener("click", ()=>{
    localStorage.removeItem("bocaMode")
     localStorage.clear()})