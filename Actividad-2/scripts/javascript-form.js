/* FUNCION FLECHA PARA GUARDAR EL REGISTRO DE UN USUARIO */

const agregarUsuario = (event) => {
    event.preventDefault();

    /* Estas variables capturan los datos de los campos del formulario, mediante su id*/
    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const ciudad = document.getElementById("ciudad").value;

    /* Variable que crea un objeto con los datos del usuario registrado*/
    const usuario = [id, cedula, nombre, fecha, ciudad];

    /* Obtener el arreglo de usuarios del localStorage (o crear uno si no existe)*/
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    /* Agregar los nuevos usuarios con sus datos al arreglo*/
    usuarios.push(usuario);

    /* Guarda el arreglo actualizado en  el localStorage*/
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    /* Esta parte nos permite que haga le redireccion inmediata a la pagina con los datos registrados. */
    window.location.href = "datos-registro.html";
};

/* Agregar el evento al formulario usando la función "agrgarUsuario"*/
document.getElementById("formRegistro").addEventListener("submit", agregarUsuario);