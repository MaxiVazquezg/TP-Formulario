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

    let validar = (() => {

        let mensaje = ""; 
       

        if (nombre == "") {
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
        if (isNaN(telefono)) { 
            mensaje = "Complete todos los campos" ; 
        }
        if (isNaN(codPostal)) {
            mensaje = "Complete todos los campos" ;
        }
        if (isNaN(dni)) { //idem
            mensaje = "Complete todos los campos" ;    
            }
        if (isNaN(cuit)) { //idem
            mensaje ="Complete todos los campos" ;     
           }

           let parrafo_errores = document.getElementById("mensaje");
        parrafo_errores.innerText = mensaje;
       
       

        return mensaje == "" ? true : false; 
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
