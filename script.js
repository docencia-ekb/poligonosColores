

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
console.log("ctx",ctx);


function recibirDatos(){

var inicioHoriz = document.getElementById("inicioHoriz").value;
var inicioVerti = document.getElementById("inicioVerti").value;

var colorCuad = document.getElementById("color").value;
var ancho = document.getElementById("ancho").value;
var alto = document.getElementById("alto").value;

console.log(inicioHoriz);
console.log(inicioVerti);


console.log(colorCuad);
console.log(ancho);
console.log(alto);


ctx.fillStyle = colorCuad;
ctx.fillRect(inicioHoriz, inicioVerti,ancho,alto);

};
