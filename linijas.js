
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 
let x = 0;
let xplus = 20;

let y = 0;
let yplus = 10;

for (i=0; i<11; i++ ){
ctx.moveTo(x,0);
ctx.lineTo(200 - x,100);
ctx.stroke();
x += xplus;

ctx.moveTo(0,y);
ctx.lineTo(200,100- y);
ctx.stroke();



y += yplus;

}


