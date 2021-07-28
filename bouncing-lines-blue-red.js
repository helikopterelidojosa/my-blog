var canvas = document.getElementById("myCanvas");
let cw = 400;
let ch = 400;
canvas.width = cw;
canvas.height = ch;
var ctx = canvas.getContext("2d");



let x = 10;
let y = 10;

let dx = 0.4;
let dy = 0.5;

let xx = 190;
let yy = 100;

let ddxx =0.3
let ddyy = 0.25
////////////////////////////////////////////

let ax = 50;
let ay = 60;

let adx =0.5;
let ady = 0.4;

let axx = 25;
let ayy = 45;

let addxx =0.3
let addyy =0.25

function animation(){
requestAnimationFrame(animation)
ctx.fillStyle = 'black'
ctx.fillRect(0,0,cw,ch)


ctx.fillStyle = '#ff6600' 
ctx.font = "16px Arial";
contents = "x = "+Math.round(x) ;
ctx.fillText(contents,10,15);
contents = "xx = "+ Math.round(xx) ;
ctx.fillText(contents,10,30);
contents = "xx-x = "+Math.round(xx-x);
ctx.fillText(contents,10,45);
contents = "y = "+Math.round(y) ;
ctx.fillText(contents,10,60);
contents = "yy = "+ Math.round(yy) ;
ctx.fillText(contents,10,75);
contents = "yy-y = "+Math.round(yy-y);
ctx.fillText(contents,10,90);

ctx.fillStyle = '#99ccff' 
ctx.font = "16px Arial";
contents = "ax = "+Math.round(ax) ;
ctx.fillText(contents,150,15);
contents = "axx = "+ Math.round(axx) ;
ctx.fillText(contents,150,30);
contents = "axx-ax = "+Math.round(axx-ax);
ctx.fillText(contents,150,45);
contents = "ay = "+Math.round(ay) ;
ctx.fillText(contents,150,60);
contents = "ayy = "+ Math.round(ayy) ;
ctx.fillText(contents,150,75);
contents = "ayy-ay = "+Math.round(ayy-ay);
ctx.fillText(contents,150,90);


ctx.beginPath();
ctx.arc(x, y, 5, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(ax, ay, 5, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = 'red'
ctx.moveTo(x,y);
ctx.lineTo(xx,yy);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "yellow"
ctx.lineWidth = 1;
ctx.strokeRect(x,y,xx-x,yy-y);



ctx.beginPath();
ctx.strokeStyle = 'blue'
ctx.moveTo(ax,ay);
ctx.lineTo(axx,ayy);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "yellow"
ctx.lineWidth = 1;
ctx.strokeRect(ax,ay,axx-ax,ayy-ay);

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
////////////////////////////////////

ax += adx;
if (ax <= 0 || ax >= cw){
adx = -adx
}

ay += ady;
if (ay <= 0 || ay >= ch){
ady = -ady
}

axx += addxx;
if (axx <= 0 ||axx >= cw){
addxx = -addxx
}

ayy += addyy;
if (ayy <= 0 || ayy >= ch){
addyy = -addyy
}


}
animation();
