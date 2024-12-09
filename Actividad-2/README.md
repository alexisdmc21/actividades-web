            EXPLICACIÓN DE LA APLICACIÓN INTERACTIVA

Se creo una pagina index.html, estableciendose como una pagina principal en la que se tiene un menu, mediante la etiqueta <nav>, con las siguientes opciones:

-Inicio, que proporcionara los datos personales en una pagina diferente

-Funcionlidades, en la que se encontraran diferentes aplicaciones, con estructuras if, switch y agregar personas y muestre dinamicamente los nombres ingresados

-Registro, en este apartado se refleja un formulario estilizado con propiedades vistas en clase como el GRAD, permitiendo ubicar dos contenedores en linea horizontalmente, en la parte de los campos del registro, se codifico con la etiqueta <form> que permite hacer este tipo de cosas en la que se cuenta con inputs, que son cajas ya sean de texto, numero, correo etc, para el caso de la fecha de nacimiento se usa un input de tipo date y con la et

Para la ejecucion de la explicacion se empieza observando el archivo index.html, en la que constara las paginas solicitadas como: 

-Página de inicio
-Página de funcionalidades
-Página de registro

Dentro del index.html, a modo de menú nos dara las opciones: Inicio, funcionalidades, registro.

- Al darle, en la opcion de "INICIO", se abrira otra página en la que se vera los datos personales del estudiante, obteniendo asi el primer punto de la actividad, adicionalmente se ubico un navegador en la que permitira al usuario volver a la pagina principal.

- Al entrar en la opción de "Funcionalidades", se despliega una nueva página, en la que que se dividio en secciones para cada uno de los pedidos, como comparar numeros con la estructura if mediante las funciones flechas, en esta seccion, mediante dos inputs donde el usuario ingresa dos numeros, haciendo las respectivas comparaciones y luego de darle al boton "comprobar", imprimirá un mensaje mediante un div de salida, el mensaje mostrara que numero es mayor. Asi mismo se tiene una opción para volver a la pagina principal (index.html), mediante la etiqueta <nav>.

COMPARACION DE NUMEROS (ESTRUCTURA IF):

En esta página, se muestra la en primer lugar, la parte de comparar numeros:

    -Mediante dos campos (inputs), donde el usuario ingresa 2 numeros que al dar un click
    pondra en ejecucion la funcion flecha (arrow function) "comparacion", que mediante la
    estructura del condicional if empieza la comparacion, para luego en el div de salida mostrar cual fue el numero mayor.

VERIFICAR EL MES CORRESPONDIENTE AL NUMERO INGRESADO:

    -Para esta seccion, se utiliza un campo(input), en el que el usuario debe ingresar un número del 1 al 12, que al momento de dar click en el boton "Verificar", mediante la funcion flecha "verificar" usando la estructura SWITCH que de er el caso de l al 12 tendra asignado el nombre de cada mes, que mostrando mediante un alert, el mes correspondiente al numero ingresado caso contrario, si se sobrepasa, entra en un default, mostrando un mensaje de "Mes no existente" mediante un alert, que reflejara un alerta tradicional.

AGREGACIÓN DE USUARIOS:

    -En la parte de agregar usuarios, de igual manera que en el anterior ejercicio, se utiliza un campo (input) de tipo texto, en donde el usuario debe ingresa su nombre completo, que al dar en "Agregar", inmediatamente se ejecuta la funcion flecha "agregarNombres", que mediante un condicional if ira guardando los nombres, con un "PUSH", y mediante un map, envia los datos para ser mostrados mediante un div de salida que para este caso se lo incluyo en una seccion donde solo aparecera los nombres, para que tenga un estilo mas atractivo.

-Por ultimo en la parte "REGISTRO", se despliega otra pagina en la que se encuentra un formulario con los campos requeridos como:

    -ID: Para el ingreso del ID se implemento un input, de tipo text ya que usualmente el ID comienza con L*******
    -Cedula: Este campo de se hizo uso de un input de tipo number, ya que solo contiene numeros la C.I
    -Nombres y apellidos: Para el ingreso de los nombres se utiliza un input de tipo text ya que solo ingresara caracteres letras.
    -Fecha de nacimiento: En esta parte se hizo uso de un input especial de tipo datatime, que permite elegir una fecha en el formato que se muestra (dd/mm/aaaa).
    -Ciudad: Como se solicita en la actividad se hace uso de la etiqueta <select>, que hace que despliegue una lista de 5 ciudades en la que el usuario debera elegir una, tal como solicita la actividad.

Adicional a esto se crea una pagina, que mostrara los datos ingresados, tabulados respectivamente, luego de haber llenado todos los campos que al momento de darle un click en el boton "Registrar", hace el uso de una funcion flecha "agregarUsuario" en la que captura los datos de loc campos mediante sus ids, tambien crea un objeto en forma de arreglo con los datos ingresados.
Mediante el comando "push" ira agregando los usuarios y gracias a funciones predeterminadas por javascript como el "localstorage", que permite almcenar los datos de forma local, entonces con un set, trae los datos para que luego sean llamados en la pagina que se mostraran los datos, por ultimo con el evento listener submit hara todo el proceso el cual tambien redirije a nuestra pagina mediante un window.location que busca de forma local la pagina html que nos redirijira, y si el usuario lo requiere tiene la opcion de regresar al inicio, ubicado debajo del boton.

PAGINA CON DATOS REGISTRADOS(datos-registro.html)

Luego de hacer el registro en el formulario, abrira automaticamente la pagina con los registros respectivos, esto con la funcion flecha (mostrarDatos), la cual guarda en una variable "const" los datos que se ingreso y se almaceno con el localstorage para luego ser llamadados mediante la funcion FOREACH, imprimiendo los datos del arreglo con los usuarios almacenados de forma tabulada, adicional se ejecuta un windows.onload para cargar los datos de forma inmediata.

Esa es la ejecucion de mi pagina interactiva usando los conceptos vistos en clases como el: PUSH, FOREACH, AGREGAR EVENTOS A UN BOTON, Y LAS FUNCIONES FLECHA, entro otros conceptos en cuanto a codificacion html y css.







