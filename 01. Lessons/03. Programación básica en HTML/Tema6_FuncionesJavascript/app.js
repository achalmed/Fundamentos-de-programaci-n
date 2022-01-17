var a = parseFloat(prompt("Ingrese el primer numero: "));
var b = parseFloat(prompt("Ingrese el segundo numero: "));
var resultado;

function calcular(operacion){
  switch(operacion){
    case "suma":
      resultado = a + b;
      break;
    case "resta":
      resultado = a - b;
      break;
    case "multiplicacion":
      resultado = a * b;
      break;
    case "division":
      resultado = a/b;
      break;
  }
  document.write("<br/><br/>Operacion: " + operacion );
  document.write("<br/>1er numero: " + a );
  document.write("<br/>2do numero: " + b );
  document.write("<br/>El resultado es: " + resultado );
}

calcular("suma");
calcular("multiplicacion");
