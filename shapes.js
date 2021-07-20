let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#00ff99";
ctx.fillRect(0, 0, 400, 400);

let x1 = Math.random() * 400;
let y1 = Math.random() * 400;
let r1 = Math.random() * 25;

let x2 = Math.random() * 400;
let y2 = Math.random() * 400;
let r2 = Math.random() * 25;

let x3 = Math.random() * 400;
let y3 = Math.random() * 400;
let r3 = Math.random() * 25;

let x4 = Math.random() * 400;
let y4 = Math.random() * 400;
let r4 = Math.random() * 25;

ctx.beginPath();
ctx.arc(x1,y1,r1,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(x2,y2,r2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(x3,y3,r3,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(x4,y4,r4,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();

ctx.lineTo(x3,y3);
ctx.stroke();

ctx.lineTo(x4,y4);
ctx.stroke();

ctx.lineTo(x1,y1);
ctx.stroke();