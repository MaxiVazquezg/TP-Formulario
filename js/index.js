"use strict";//El modo estricto hace que el navegador sea más exigente con tu código e intentará evitar errores potencialmente malos


//Creamos un objeto llamado Producto, con sus propiedades
//Utilizando el patrón de diseño Prototype generar luego herencias para otros obj
class Usuario {// declaracion de una clase

constructor (nombre, apellido, telefono, domicilio, codPostal, dni, cuit){//crear e inicializar un objeto creado a partir de una clase.

    //this hace referencia a esta clase y crea una pequena variable que va 
    //a tomar el valor del parametro que le asigne Ej: nombre
    this.nombre = nombre; 
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.codPostal = codPostal;
    this.dni = dni;
    this.cuit = cuit;
}
    toString() { //Permite convertir el o bjeto a texto legible
        //método devuelve una cadena que representa el objeto
        return `Nombre y apellido: ${this.nombre} ${this.apellido} - Domicilio: ${this.domicilio} - Telefono: ${this.telefono} - Codigo Postal: ${this.codPostal} - DNI: ${this.dni} - CUIT: ${this.cuit}`;
    }//finaliza el metodo y devuelve un valor
}

class Inventario {//Creamos un objeto Inventario donde usuarios es un arreglo
    constructor(usuarios) {
        this.usuarios = usuarios;
    }
    agregar(usNuevo) { //Con este método (creamos metodo dentro de clase) agrego nuevos usuarios al arreglo usuarios
       //TODO para crear un nuevo arreglo usando un arreglo existente como parte de él
        this.usuarios.push(usNuevo); //Add con push agrego un nuevo elemento al array
    }
}

//Creamos un objeto inventarioArt y asigno un arreglo vacío
//Se pueden crear otros objetos Inventarios para otras categorías
let inventarioArt = new Inventario([]); 
//crea nuevo objeto 

//Las variables var pueden ser modificadas y re-declaradas dentro de su 
// ámbito; las variables let pueden ser modificadas, pero no re-declaradas;
//  las variables const no pueden ser modificadas ni re-declaradas.


//Esta función permite agregar productos al arreglo a través de los input del HTML
function guardar() {
    //seleccionar un elemento del documento 
    //por medio del valor del atributo id 
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
    let validar = (() => {
        //Verificación de campos vacíos
        let mensaje = ""; // defino a mensaje como vacio para luego
        //llenarlo con el mensaje segun sea el caso de las propiedades 
        //del objeto validado.

        if (nombre == "") { //si es igual a vacio el mensaje se rellena con "Complete todos los campos"
           mensaje = "Complete todos los campos" ;
                }
        if (apellido == "") {
            mensaje = "Complete todos los campos" ; 
        }
        if (domicilio == "") { 
            mensaje = "Complete todos los campos" ;
        }
        if (telefono == "") {
            mensaje = "Complete todos los campos" ;  
        }
        if (codPostal == "") { 
            mensaje ="Complete todos los campos" ;  
         }
         if (dni == "") { 
            mensaje = "Complete todos los campos" ;  
         }
         if (cuit == "") { 
            mensaje ="Complete todos los campos" ; 
         }
        if (isNaN(telefono)) {  //Verificación si los valores son numéricos "isNaN"
            mensaje = "Complete todos los campos" ; 
        }//intento convertir el parámetro pasado a un número
        // Si no se puede convertir, devuelve true; en caso contrario, devuelve false
        if (isNaN(codPostal)) {
            mensaje = "Complete todos los campos" ;
        }
        if (isNaN(dni)) { 
            mensaje = "Complete todos los campos" ;    
            }
        if (isNaN(cuit)) { 
            mensaje ="Complete todos los campos" ;     
           }
           //conque una de las variables este vacia el mensaje se llenara con Complete todos los campos

           let parrafo_errores = document.getElementById("mensaje");//paso al id mensaje

        parrafo_errores.innerText = mensaje;// mensaje tiene el contenido del parrafo_errores
        //Si no hay mensajes de error, retorna true
        return mensaje == "" ? true : false; //sentencias condicional "?" parecido al 
        //if, en este caso si no hay mensaje de error sigue con el proceso.
        //finaliza la ejecución de la función y especifica un valor para
        // ser devuelto a quien llama a la función.
    })

    if (validar()) {//Si la validación esta ok y retorna true, se agrega el usuario al inventario
        //Si la validación retorna false, el producto no se agrega

        let nuevo = new Usuario (nombre, apellido, domicilio, telefono, codPostal ,dni ,cuit);  //declaro variable nuevo que es 
        //igual a nuevo usuario
        inventarioArt.agregar(nuevo); //metodo agregar sobre el objeto nuevo que
        //tiene el nuevo usuario
        document.getElementById("correcto").innerText = `Producto agregado correctamente`;
        //actualizo con innerText
        document.getElementById("formulario").reset();//restauro los elementos
        // de un formulario a sus valores por defecto. 
    }
    }

const {usuarios ,usuarios: {nombre, cuit}} = inventarioArt; //desestructuro usuarios

function listar() {
    
    var otraList = false;//inicia la variable en false

    let resultado = document.getElementById("lista");//identifico la lista con el id

    if (usuarios == "") { //si usuarios es = a vacio la lista dira "No ha ingresado ningun dato aun"
        resultado.innerText = "No ha ingresado ningun dato aun";
    }

    if(usuarios != "") { //si es distino de vacio 
       
        document.getElementById("lista").innerText = ""; //vacio la lista
       //el foreach itera el array usuarios saca cada usuario, luego le pasa los valores al toString y los concatena a resultado con el inner text
        usuarios.forEach(usuarios => resultado.innerText += usuarios.toString() + '\n');
        usuarios.forEach(usuarios => console.log(usuarios.toString()));//mostramos por consola 
      
       otraList = true; //si entra en el if se cambia a true
    }    
        let resultad = document.getElementById("otraLista"); //pasamos el id

        if (otraList == true) { //si es true 
         document.getElementById("otraLista").innerText = ""; //la iniciamos vacia
       
      // usamos cada elemento del array de la misma manera que en la lista anterior pero llenamos el innetext sin ningun to string
         usuarios.forEach(usuarios => resultad.innerText +=  `${usuarios.nombre} - CUIT ${usuarios.cuit}` + '\n');
     }   
}
