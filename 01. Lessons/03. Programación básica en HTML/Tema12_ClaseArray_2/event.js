var fotos = [];
fotos["Maria"] = "foto1.jpg";
fotos["Pedro"] = "foto2.jpg";

class Alumno{

  constructor(n, a, e){
    this.nombre = n;
    this.apellido = a;
    this.edad = e;
    this.foto = fotos[this.nombre];
  }

  hablar(){
    alert("Hola, mi edad es: " + this.edad);
  }

}

var alumno1 = new Alumno("Maria","Lopez",10);
var alumno2 = new Alumno("Pedro","Garcia",9);


var cn = document.getElementById("lienzo");
var papel = cn.getContext("2d");
var foto = new Image();

elegirAlumno();

function elegirAlumno(){
  var nombre = prompt("Indique nombre de alumno a mostrar: ");
  foto.src=fotos[nombre];
  foto.addEventListener("load", mostrarFoto);
}

function mostrarFoto(){
  papel.drawImage(foto,0,0);
}
