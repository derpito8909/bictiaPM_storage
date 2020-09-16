const btnDark = document.getElementById('dark')

btnDark.addEventListener('click', ()=>{
    const container = document.getElementById('container').classList.add('dark')
})

const usuario = document.getElementById('usuario')

usuario.addEventListener('click', ()=>{
    const nombreUsuario = prompt('Escribe tu nombre')
    localStorage.setItem("usuarioStorage", nombreUsuario)
})


const traerUsuarioStorage = ()=>{
    const usuarioGuardadoEnStorage = localStorage.getItem('usuarioStorage')
    document.getElementById('mostrarUsuario').innerText = usuarioGuardadoEnStorage
    console.log(usuarioGuardadoEnStorage, "Este es el usuario")
}

traerUsuarioStorage()
