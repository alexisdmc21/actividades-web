
/*FUNCION FLECHA PARA MOSTRAR LOS DATOS INGRESADOS EN EL FORMULARIO DE REGISTRO*/

const mostrarDatos = () => {
    /* Con esta variable se obtiene el arreglo de usuarios del almacenados anteriormente en el localStorage*/
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    /* Obtener referencia al cuerpo de la tabla*/
    const tabla = document.getElementById("tablaUsuarios");

    // Limpiar la tabla
    tabla.innerHTML = "";

    /* La funcion predeterminada forEach hace que recorra cada usuario del arreglo registrado 
    y lo va agregando a la tabla*/
    usuarios.forEach((usuario) => {
        const fila = `
            <tr>
                <td>${usuario[0]}</td>
                <td>${usuario[1]}</td>
                <td>${usuario[2]}</td>  
                <td>${usuario[3]}</td>
                <td>${usuario[4]}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
};

/* Esta parte de codigo, ayuda a que se nos muestre los datos al cargar la página de forma inmediata.*/
window.onload = mostrarDatos;
