var canvas = document.getElementById("myCanvas");
let cw = 200;
let ch = 200;
canvas.width = cw; 
canvas.height = ch;
var ctx = canvas.getContext("2d");

let xxblue = cw-22;
let yyblue = ch/2;

let ddxxblue = 1.25
let ddyyblue = 0.8125;


function drawBlueLine(x,y,xx,yy){

    ctx.beginPath();
    ctx.strokeStyle = "blue"
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    //ctx.lineTo(0,ch)
    ctx.stroke();
    
}

function drawRedLine(x,y,xx,yy){

    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    //ctx.lineTo(0,ch)
    ctx.stroke();
    
}


function animation(){
requestAnimationFrame(animation)

ctx.fillStyle = "black"
ctx.fillRect(0,0,200,200)


ctx.fillStyle = "yellow"
ctx.fillRect(xxblue,yyblue,20,20);



//ctx.beginPath();
//ctx.strokeStyle = "blue"
//ctx.moveTo(0,0);
//ctx.lineTo(xxblue,yyblue);
//ctx.lineTo(0,ch)
//ctx.stroke();
//////////////////////////////////////blue
drawBlueLine(0,0,xxblue,yyblue);
drawBlueLine(cw,0,xxblue+20,yyblue);
drawBlueLine(0,ch,xxblue,yyblue +20);
drawBlueLine(cw,ch,xxblue+20,yyblue+20);
///////////////////////////////////////////red
drawRedLine(0,0,xxblue,yyblue +20)
drawRedLine(0,0,xxblue+20,yyblue)

drawRedLine(cw,0,xxblue,yyblue)
drawRedLine(cw,0,xxblue+20,yyblue+20)

drawRedLine(0,ch,xxblue,yyblue)
drawRedLine(0,ch,xxblue+20,yyblue+20)

drawRedLine(cw,ch,xxblue,yyblue +20)
drawRedLine(cw,ch,xxblue+20,yyblue)





ctx.beginPath();
ctx.strokeStyle = "yellow"
ctx.moveTo(xxblue,yyblue);
ctx.lineTo(xxblue+20,yyblue);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "red"
ctx.moveTo(cw,0);
ctx.lineTo(xxblue+20,yyblue);
ctx.lineTo(cw,ch)
//ctx.stroke();


xxblue += ddxxblue;

if (xxblue <= 0 || xxblue +20 >= cw){
    ddxxblue = -ddxxblue
}

yyblue += ddyyblue;

if (yyblue <= 0 || yyblue + 20 >= ch){
    ddyyblue = -ddyyblue
}

}

animation();
