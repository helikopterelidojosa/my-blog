const canvas = document.getElementById('progressBar')
canvas.width = 300
canvas.height = 100
const c = canvas.getContext('2d')

//window rectangle starting points location
let xwindow = 0
let ywindow = 0

//progressBar
let x = xwindow + 20 //starting x point
let y = ywindow + 60 //starting y point
let barLenght = 0
let barHeight = 10

let maxLength = 260
let progressSpeed = 0.5


function funnyProgress(){
 requestAnimationFrame(funnyProgress)

//window - Blue rect
c.fillStyle = "blue"
c.fillRect(xwindow,ywindow,300,100)

//window fill - grey rect
c.fillStyle = "grey"
c.fillRect(xwindow + 10, ywindow + 40, 280, 50 )

//----------PROGRESS-BAR----------------

//progress frame - empty rect
c.strokeStyle = "black"
c.strokeRect(x, y, maxLength, barHeight)

//progress bar - rect blue
c.fillStyle = "blue"
c.fillRect(x,y,barLenght,barHeight)

//making progress stop at maxLength
if(barLenght >= maxLength){progressSpeed = 0}

//making it grow by speed
barLenght += progressSpeed 



//Computing text...percentage%
let barLenghtPercentage = Math.round(barLenght / maxLength * 100)

c.fillStyle = "white"
c.font = "20px Courier New "
showText = "Computing..." + barLenghtPercentage + "%"
c.fillText(showText, xwindow + 10, ywindow + 20)

}
funnyProgress()








    