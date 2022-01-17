var cn = document.getElementById("lienzo");
var papel = cn.getContext("2d");
var ruta = "fondo.jpg";

var fondo = new Image();
fondo.src=ruta;
fondo.addEventListener("load",dibujarFondo);

var conejo = new Image();
conejo.src = "conejo.png";
conejo.addEventListener("load",dibujarConejo);

function dibujarFondo(){
  papel.drawImage(fondo,0,0);
}

function dibujarConejo(){
  papel.drawImage(conejo,400,400);
}
