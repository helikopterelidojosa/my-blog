let can = document.getElementById("myCanvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
let c = can.getContext("2d");

let xplatums = 500;
let yaugstums = 500;

let x = (innerWidth / 2) -xplatums / 2;
let y = (innerHeight / 2) - (yaugstums / 2);


let xplus = 10;
let yplus =  10;



for (i=0; i<50; i++){
c.rect(x,y,xplatums,yaugstums);
c.stroke();
x += 5;
y += 5;
xplatums -= xplus;
yaugstums -= yplus;
}


