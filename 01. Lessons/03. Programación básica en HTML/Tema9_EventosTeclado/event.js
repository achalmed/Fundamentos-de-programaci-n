// Capturar evento cuando una tecla es presionada:
//document.addEventListener("keydown", escribirConsola);

// Capturar evento cuando una tecla es soltada:
document.addEventListener("keyup", escribirConsola);

function escribirConsola(evento){
  //alert("Tecla presionada!!");

  console.log("Tecla presionada.");
  console.log(evento);

  // Si la tecla up es presionada, se muestra una alerta
  if(evento.keyCode == 38){
    alert("ArrowUp presionada!!");
  }

  // Si la tecla down es presionada, se muestra una alerta
  if(evento.keyCode == 40){
    alert("ArrowDown presionada!!");
  }
}
