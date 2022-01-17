class Alumno{
  constructor(n, a, e){
    this.nombre = n;
    this.apellido = a;
    this.edad = e;
  }

  hablar(){
    alert("Hola, mi edad es: " + this.edad);
  }

}

var alumno;
var aula = [];

function crearAlumno(){
  var nombre = prompt("Ingrese nombre: ");
  var apellido = prompt("Ingrese apellido: ");
  var edad = prompt("Ingrese edad: ");

  alumno = new Alumno(nombre, apellido, edad);
}

function agregarAula(alumno){
  aula.push(alumno);
  alert("Alumno agregado!");
}

function imprimirLista(){
  for(i=0; i < aula.length; i++){
    document.write("<br/> Nombre: " + aula[i].nombre + " - Apellido: " + aula[i].apellido);
  }
}

var btnCrear = document.getElementById("crear");
var btnAgregar = document.getElementById("agregar");
var btnListar = document.getElementById("listar");

btnCrear.addEventListener("click", crearAlumno);
btnAgregar.addEventListener("click", function(){agregarAula(alumno)});
btnListar.addEventListener("click", imprimirLista);
