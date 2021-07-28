var canvas = document.getElementById("myCanvas");
let cw = 500;
let ch = 500;
canvas.width = cw;
canvas.height = ch;
var ctx = canvas.getContext("2d");



let x1 = 200;
let y1 = 20;
let dx1 = 0.1;
let dy1 = 0.1;


let x2 = 300;
let y2 = 100;
let dx2 = 0.2;
let dy2 = 0.2;

let x3 = 250;
let y3 = 250;
let dx3 = 0.3;
let dy3 = 0.3;


let x4 = 100;
let y4 = 250;
let dx4 = 0.4;
let dy4 = 0.4;

let x5 = 100;
let y5= 50;
let dx5 = 0.5;
let dy5 = 0.5;





function animation(){
requestAnimationFrame(animation)
ctx.fillStyle = 'black'
ctx.fillRect(0,0,cw,ch)


ctx.fillStyle = '#ffff00' 
ctx.font = "16px Arial";
contents = "x1 = "+Math.round(x1) ;
ctx.fillText(contents,10,15);
contents = "x2 = "+ Math.round(x2) ;
ctx.fillText(contents,10,30);
contents = "x3 = "+Math.round(x3);
ctx.fillText(contents,10,45);
contents = "x4 = "+Math.round(x4) ;
ctx.fillText(contents,10,60);
contents = "x5 = "+ Math.round(x5) ;
ctx.fillText(contents,10,75);


ctx.fillStyle = '#ff0066' 
ctx.font = "16px Arial";
contents = "y1 = "+Math.round(y1) ;
ctx.fillText(contents,150,15);
contents = "y2 = "+ Math.round(y2) ;
ctx.fillText(contents,150,30);
contents = "y3 = "+Math.round(y3);
ctx.fillText(contents,150,45);
contents = "y4 = "+Math.round(y4) ;
ctx.fillText(contents,150,60);
contents = "y5 = "+ Math.round(y5) ;
ctx.fillText(contents,150,75);



ctx.beginPath();
ctx.strokeStyle = '#ffff00'
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.lineTo(x3,y3)
ctx.lineTo(x4,y4)
ctx.lineTo(x5,y5)
ctx.closePath()
ctx.lineWidth = 5;
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = '#ff0066'
ctx.moveTo(x1,y1);
ctx.lineTo(x3,y3);
ctx.lineWidth = 2;
ctx.stroke();
ctx.moveTo(x1,y1);
ctx.lineTo(x4,y4);
ctx.lineWidth = 2;
ctx.stroke();
ctx.moveTo(x2,y2);
ctx.lineTo(x4,y4);
ctx.lineWidth = 2;
ctx.stroke();
ctx.moveTo(x2,y2)
ctx.lineTo(x5,y5)
ctx.lineWidth = 2;
ctx.stroke();
ctx.moveTo(x3,y3)
ctx.lineTo(x5,y5)
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(x1,y1,20,0, 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(x2,y2,20,0, 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(x3,y3,20,0, 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(x4,y4,20,0, 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(x5,y5,20,0, 2*Math.PI);
ctx.stroke();








x1 += dx1;
x2 += dx2;
x3 += dx3;
x4 += dx4;
x5 += dx5;

y1 += dy1
y2 += dy2
y3 += dy3
y4 += dy4
y5 += dy5

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
if (x1 <= 0 || x1 >= cw){
    dx1 = -dx1
    }
if (x2 <= 0 || x2 >= cw){
        dx2 = -dx2
        }
if (x3 <= 0 || x3 >= cw){
            dx3 = -dx3
            }
if (x4 <= 0 || x4 >= cw){
                dx4 = -dx4
                }
if (x5 <= 0 || x5 >= cw){
                    dx5 = -dx5
                    }
//yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy                                     

if (y1 <= 0 || y1 >= ch){
                        dy1 = -dy1
                        }
                        
 if (y2 <= 0 || y2 >= ch){
                            dy2 = -dy2
                            }
                            
if (y3 <= 0 || y3 >= ch){
                                dy3 = -dy3
                                }
                                
if (y4 <= 0 || y4 >= ch){
                                    dy4 = -dy4
                                    }
                                    
if (y5 <= 0 || y5 >= ch){
                                        dy5 = -dy5
                                        }
                                        
                                                                                                                                                                


}
animation();