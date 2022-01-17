var x= parseFloat(prompt("Ingese el primer número: "));
var y= parseFloat(prompt("Ingese el segundo número: "));
var resultado = parseFloat(x) + parseFloat(y);
var operación = prompt("Ingrese la operación: 1-Suma 2-Resta 3-Multiplicación 4-División")
//Aquí realizaremos la operación
/*
if(operación ==1){
resulatdo = x+y;
} else{
    if(operación ==2){
        resultado = x-y;
    }
}
*/
document.write("El resultado es:" + resultado);