let logUser = localStorage.getItem('userForm')
let nomUser = JSON.parse(logUser)

function platillaOK(){
    let plantilla = document.write(`
    <nav>
    <h1><i class="fa-solid fa-shop"></i> ${nomUser[0]} </h1>
    <h2>Bienvenido espero que encuentre la receta que mas le guste</h2>
<ul>
    <li><a href="#">Inicio</a></li>
    <li><button  onclick="cerrarSession()">LogOut</button></li>
</ul>
</nav>


    `)
return plantilla
} 
platillaOK()

function cerrarSession() {
    localStorage.removeItem('userForm')

    location.reload()
}

console.dir(document.body)