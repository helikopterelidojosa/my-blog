var canvas = document.getElementById("myCanvas");
let cw = 200;
let ch = 200;
canvas.width = cw;
canvas.height = ch;
var ctx = canvas.getContext("2d");



let x = 10;
let y = 10;

let dx = 1.5;
let dy = 1;

let xx = 190;
let yy = 100;

let ddxx = 1.2
let ddyy = 1


function animation(){
requestAnimationFrame(animation)
ctx.fillRect(0,0,cw,ch)

ctx.beginPath();
ctx.strokeStyle = 'red'
ctx.moveTo(x,y);
ctx.lineTo(xx,yy);
ctx.stroke();

x += dx;
if (x <= 0 || x >= cw){
dx = -dx
}

y += dy;
if (y <= 0 || y >= ch){
dy = -dy
}

xx += ddxx;
if (xx <= 0 ||xx >= cw){
ddxx = -ddxx
}

yy += ddyy;
if (yy <= 0 || yy >= ch){
ddyy = -ddyy
}



}
animation();