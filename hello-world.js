var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

let x = 10;
let dx = 0.5;

function animate(){
requestAnimationFrame(animate)

ctx.fillStyle = "yellow"
ctx.fillRect(0,0,200,100);

ctx.fillStyle = "blue";
ctx.font = "20px Arial";
ctx.fillText("Hello World",x,50);

x += dx;

if (x <= 0 || x + 100 >=200){
dx = - dx;
}

}

animate();
