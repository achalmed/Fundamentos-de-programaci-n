var a = parseFloat(prompt("Ingrese el primer numero: "));
var b = parseFloat(prompt("Ingrese el segundo numero: "));
var resultado;
var operacion = prompt("Ingrese la operacion: 1-Suma 2-Resta 3-Multiplicacion 4-Division");
//Aquí realizaremos la operación
/*
if( operacion == 1 ){
  resultado = a + b;
} else {
  if ( operacion == 2 ){
    resultado = a - b;
  }
}
*/
switch(operacion){
  case "1":
    resultado = a + b;
    break;
  case "2":
    resultado = a - b;
    break;
  case "3":
    resultado = a * b;
    break;
  case "4":
    resultado = a/b;
    break;
}

document.write("El resultado es: " + resultado );
