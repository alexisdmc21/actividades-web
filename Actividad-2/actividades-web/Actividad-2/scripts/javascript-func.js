const getInputsValue = (id) => {
    const inputElement = document.getElementById(id);
    const inputValue = inputElement.value;
    const numberValue = parseFloat(inputValue);
    return numberValue;
}

const mirarResultado = (resultado) => {
    document.getElementById('resultado').textContent = `La comparación fue: ${resultado}`;
}

/*FUNCÓN FLECHA PAR COMPARAR DOS NUMEROS - ESTRUCTURA IF*/
const comparacion = (event) => {
    event.preventDefault();
    const numero1 = getInputsValue('n1');
    const numero2 = getInputsValue('n2');

    let resultado;

    /* IF CONDICIONAL: que permite la comparacion de dos numeros */

    if (numero1 > numero2) {

        /*Si numero 1 es mayor mostrara este mensaje*/
        resultado = `El primer número ingresado ${numero1} fue mayor que el segundo ${numero2}`;
    } else if (numero2 > numero1) {

        /*Si numero 2 es mayor mostrara este mensaje*/
        resultado = `El segundo número ingresado ${numero2} fue mayor que el primero ${numero1}`;
    } else {

        /*Si numero 1 y numero 2 son iguales mostrara este mensaje*/
        resultado = `El primer número ${numero1} es igual que el segundo numero ${numero2}`;
    }

    /*Llamado a la funcion implementada anteriormente para mostrar los mensajes(resultadi)*/

    mirarResultado(resultado);
}


/*FUNCIÓN FLECHA PARA VERIFICAR A QUE MES CORRESPONDE EL NUMERO INGRESADO - ESTRUCTURA SWITCH*/

const verificar = (event) => {
    event.preventDefault();
    const numero3 = getInputsValue('n3');

    let mes;

    switch (numero3) {
        case 1:
            mes = 'Enero';
            break;
        case 2:
            mes = 'Febrero';
            break;
        case 3:
            mes = 'Marzo'
            break;
        case 4:
            mes = 'Abril';
            break;
        case 5:
            mes = 'Mayo';
            break;
        case 6:
            mes = 'Junio'
            break;
        case 7:
            mes = 'Julio';
            break;
        case 8:
            mes = 'Agosto';
            break;
        case 9:
            mes = 'Septiembre'
            break;
        case 10:
            mes = 'Octubre';
            break;
        case 11:
            mes = 'Noviembre';
            break;
        case 12:
            mes = 'Diciembre';
            break;
        default:
            mes = 'Mes no existente'
    }

    alert(`El mes que corresponde al numero ingresado es: ${mes}`);
}



const nombres = [];

const agregarNombre = () => {
    const nombre = document.getElementById("n4").value.trim();
    
    if (nombre) {
        nombres.push(nombre);
        document.getElementById("n4").value = ""; // Limpiar el campo de entrada
        document.getElementById("listaNombres").innerHTML = nombres
            .map((nombre, index) => `<li>${index + 1}. ${nombre}</li>`)
            .join("");
    }
};