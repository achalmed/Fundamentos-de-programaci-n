// Leemos los valores mínimo y máximo a través de un alert
var a = parseInt(prompt("Ingrese valor minimo: "));
var b = parseInt(prompt("Ingrese valor maximo: "));

// Vamos a listar 10 números aleatorios, para  ellos llamamos 10 veces a la funcion
for(var i = 0; i < 10; i++){
  var random = aleatorio(a,b);
  document.write(random + ", ");
}

function aleatorio(min, max){
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
