var num1 = document.getElementById("txt_num1");
var num2 = document.getElementById("txt_num2");
var boton = document.getElementById("btn_sumar");

boton.addEventListener("click", sumar);

function sumar(){
  var a = parseFloat(num1.value);
  var b = parseFloat(num2.value);
  var resultado = a + b;
  alert("El resultado es: " + resultado);
}
