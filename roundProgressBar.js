const canvas = document.getElementById('roundProgressBar')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')


let barLenght = 0
let degrees = Math.PI * 2 / 360
let progress = 2
let progressSpeed = 0.5
let maxLength = Math.PI * 2 / 360 * 360

let locationX = innerWidth / 2
let locationY = innerHeight / 2

function funnyProgress(){
    requestAnimationFrame(funnyProgress)
    c.clearRect (0, 0, innerWidth, innerHeight)

    animatedProgress = barLenght + degrees * progress
//circle arc
c.beginPath()
c.arc(locationX, locationY, 120, 0, animatedProgress, false)
c.lineWidth = 5
c.strokeStyle = "blue"
c.stroke()

//making progress stop at maxLength
if(animatedProgress >= maxLength){progressSpeed = 0}

//making it grow by speed
progress += progressSpeed 


let barLenghtPercentage = Math.round(animatedProgress / maxLength * 100)

c.fillStyle = "blue"
c.font = "20px Courier New "
showText = barLenghtPercentage + "%"
c.fillText(showText, locationX, locationY)

}

funnyProgress()