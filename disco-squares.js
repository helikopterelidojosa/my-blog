let can = document.getElementById("myCanvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
let c = can.getContext("2d");


let xplatums = 100;
let yplatums = 100;

function getRandomColour(){
    var red = Math.floor(Math.random()* 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
  
    return "rgb("+red+","+green+"," +blue+" )";  
  }
    


for (let i = 0; i < 10; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    
    
    c.fillStyle = getRandomColour();
    c.ctrokeStyle="black";
    c.fillRect(x, y, xplatums, yplatums);
    c.rect(x, y, xplatums, yplatums);
    c.fill();
    c.stroke();



    //console.log(color);
    //console.log(c);

  
}
