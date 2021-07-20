var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let x = 0;
let dx = 0.75;

let y = 0;
let dy = 0.45;

function lin(y){
ctx.beginPath();
ctx.moveTo(0,y);
ctx.lineTo(200,y);
ctx.stroke();
}

function li2(x){
ctx.beginPath();
ctx.moveTo(x,0);
ctx.lineTo(x,100);
ctx.stroke();
}



function skraidosasLinijas(){
requestAnimationFrame(skraidosasLinijas);
ctx.clearRect(0,0,200,100);


ctx.beginPath();
ctx.fillStyle = "blue"
ctx.fillRect(0,0,200,100);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red"
ctx.fillRect(0,0,100,50);

ctx.fill();

ctx.beginPath();
ctx.fillRect(100,50,200,100);
ctx.fillStyle = "red"
ctx.fill();

lin(50)
li2(100)




lin(y);

li2(x);

let colors;

if (x < 100 && y < 50){
colors = "blue";
} else if (x > 100 && y < 50) {
colors = "red"
} else if (x < 100 && y >50) {
colors = "red"
} else {colors = "blue"}




ctx.beginPath();
ctx.fillStyle = colors;
ctx.arc(x, y, 15, 0, 2 * Math.PI);
ctx.fill();
//ctx.stroke();


y+=dy;



if(y>=100 || y<=0){dy=-dy}


x+=dx;
if(x>=200 || x<=0){dx=-dx}






}
skraidosasLinijas();
