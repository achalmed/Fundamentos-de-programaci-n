var num;

do{
  num = parseFloat(prompt("Ingrese numero para calcular el factorial: "));
} while (num < 5)


var resultado = 1;


for (var i = 1; i <= num; i++){
  resultado = resultado * i;
}

document.write("<br/><br/>FOR: El factorial es: " + resultado);

var i = 1;
resultado = 1;

while(i <= num){
  resultado = resultado * i;
  i++;
}

document.write("<br/><br/>WHILE: El factorial es: " + resultado);

var i = 1;
resultado = 1;
do{
  resultado = resultado * i;
  i++;
} while (i <= num);

document.write("<br/><br/>DO-WHILE: El factorial es: " + resultado);
