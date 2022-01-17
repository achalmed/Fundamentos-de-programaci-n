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

var alumno1 = new Alumno("Maria","Lopez",10);
var alumno2 = new Alumno("Pedro","Garcia",9);
var alumno3 = new Alumno("Rosa","Rivas",12);


var aula = [];
aula[0] = alumno1;
aula[1] = alumno2;
aula[2] = alumno3;

// Mostrar objetos Alumno
//console.log(alumno1, alumno2);

// Mostrar en consola el elemento de indice 1 del array aula.
console.log(aula[1]);

// Dado que el elemento es del tipo alumno, mostrar en consola su nombre
console.log(aula[1].nombre);

// Imprimir en la página la lista de alumnos.
for (i=0; i < aula.length; i++){
  document.write("<br/>Alumno: " + aula[i].nombre);
}

// Llamar a funcion que muestra un alert
//alumno2.hablar();
