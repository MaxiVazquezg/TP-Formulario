"use strict";

class Rodamiento {
   constructor (nombre, apellido, telefono, domicilio, codPostal, dni, cuit){
    this.nombre = nombre;
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.codPostal = codPostal;
    this.dni = dni;
    this.cuit = cuit;
}
    toString() { //método devuelve una cadena que representa el objeto
        return `Nombre y apellido: ${this.nombre} ${this.apellido}, Domicilio: ${this.domicilio}, Telefono: ${this.telefono}, Codigo Postal: ${this.codPostal}, DNI: ${this.dni}, CUIT: ${this.cuit}`;
    }
}

class Inventario {
    constructor(rodamientos) {
        this.rodamientos = rodamientos;
    }
    agregar(rodNuevo) {

        //TODO para crear un nuevo arreglo usando un arreglo existente como parte de él
        this.rodamientos.push(rodNuevo); //Add con push agrego un nuevo elemento al array
    }
}
//Creamos un objeto inventarioArt y asigno un arreglo vacío
//Se pueden crear otros objetos Inventarios para otras categorías
let inventarioArt = new Inventario([]); //crea nuevo objeto 

function guardar() {
    let nombre = document.getElementById("nombre").value; 
    let apellido = document.getElementById("apellido").value;
    let domicilio = document.getElementById("domicilio").value;
    let telefono = Number(document.getElementById("telefono").value);
    let codPostal = Number(document.getElementById("codPostal").value);
    let dni = Number(document.getElementById("dni").value);
    let cuit = Number(document.getElementById("cuit").value);


    document.getElementById("correcto").innerText = '';//innerText actualiza el 
    //contenido de texto del nodo seleccionado.

    // Función flecha para "validar" todos los campos.
    //Evalúa  la expression del lado derecho y devuelve su resultado
    //Devuelve el mismo mensaje en caso que el valor no sea numérico para 'valor' y 'cantidad'
    let validar = (() => {
        //Verificación de campos vacíos
        let mensaje = ""; // defino a mensaje como vacio para luego
        //llenarlo con el mensaje segun sea el caso de las propiedades 
        //del objeto validado.

        if (nombre == "") {// si es igual a vacio
            mensaje += "Ingrese un nombre" + '\n';// a mensaje le add lo que
            //esta entre comillas y remplaza el "" vacio.Hce un salto de 
            //lina con "\n" en el caso de que los tres box esten vacias.
                }
        if (apellido == "") {//valor es vacio
            mensaje += "Ingrese un apellido" + '\n'; //idem 

        }
        if (domicilio == "") { //idem 
            mensaje += "Ingrese una domicilio" + '\n';//idem
        }
        if (telefono == "") { //idem
                mensaje += "Ingrese telefono" + '\n';  //idem
        }
        if (codPostal == "") { //idem
            mensaje += "Ingrese codPostal" + '\n';  //idem
         }
         if (dni == "") { //idem
            mensaje += "Ingrese dni" + '\n';  //idem
         }
         if (cuit == "") { //idem
            mensaje += "Ingrese cuit" + '\n';  //idem
         }
        //Verificación si los valores son numéricos "isNaN"
        if (isNaN(telefono)) {  //intento convertir el parámetro pasado a un número
            mensaje += "Ingrese un telefono" + '\n'; //mensaje le add lo que
            //esta entre comillas y remplaza el "" vacio.Hace un salto de 
            //linea con "\n".
        }
        if (isNaN(codPostal)) { //idem
            mensaje += "Ingrese una codPostal" + '\n';
        // Si no se puede convertir, devuelve true; en caso contrario, devuelve false
        }
        if (isNaN(dni)) { //idem
            mensaje += "Ingrese un dni" + '\n';
        }
        if (isNaN(cuit)) { //idem
            mensaje += "Ingrese un cuit" + '\n';
        }
        let parrafo_errores = document.getElementById("mensaje");//paso al id mensaje
        //el contendido del validar
        parrafo_errores.innerText = mensaje;// mensaje tiene el contenido del parrafo_errores
        //Si no hay mensajes de error, retorna true
        return mensaje == "" ? true : false; //sentencias condicional "?" parecido al 
        //if, en este caso si no hay mensaje de error sigue con el proceso.
        //finaliza la ejecución de la función y especifica un valor para
        // ser devuelto a quien llama a la función.
    })

    //Si la validación esta ok y retorna true, se agrega el producto al inventario
    //Si la validación retorna false, el producto no se agrega
    if (validar()) {

        let nuevo = new Rodamiento (nombre, apellido, domicilio, telefono, codPostal ,dni ,cuit); //declaro variable nuevo que es 
        //igual a nuevo producto
        inventarioArt.agregar(nuevo); //metodo agregar sobre el objeto nuevo que
        //tiene el nuevo producto
        document.getElementById("correcto").innerText = `Producto agregado correctamente`;
        //actualizo con innerText
        document.getElementById("formulario").reset();//restauro los elementos
        // de un formulario a sus valores por defecto. 
    }
}
const {rodamientos, rodamientos: {nombre, cuit}} = inventarioArt;

function listar() {
    
    var otraList = false;
    let resultado = document.getElementById("lista");

    if (rodamientos == "") { //si se aprieta listar sin haber ingresado productos
        resultado.innerText = "No ha ingresado ningun dato aun";
    }

    if(rodamientos != "") {
       
        document.getElementById("lista").innerText = ""; 
       
        rodamientos.forEach(rodamientos => resultado.innerText += rodamientos.toString() + '\n');
       // inventarioArt.rodamientos.forEach(rodamientos => console.log(rodamientos.toString()));
       otraList = true;
    }    
        let resultad = document.getElementById("otraLista");

        if (otraList == true) {
         document.getElementById("otraLista").innerText = ""; 
       
         rodamientos.forEach(rodamientos => resultad.innerText +=  `Nombre ${rodamientos.nombre} numero de CUIT ${rodamientos.cuit}` + '\n');
     }   
}
