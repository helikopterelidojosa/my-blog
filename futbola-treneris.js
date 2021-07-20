const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth - 5
canvas.height = window.innerHeight -5
const c = canvas.getContext('2d')

//---------------------ANIMATING--------------------------
//circle arc


//spawn of the moving circle and its radius
let x = innerWidth / 2; let y = innerHeight / 2; let radius = 30




//randomise starting direction of ball

let xDirection
switch (Math.round(Math.random())) {
    case 0:      xDirection = -1
      break
    case 1:      xDirection = 1 
}
  let yDirection
  switch (Math.round(Math.random())) {
    case 0:      yDirection = -1
      break
    case 1:      yDirection = 1 }

let dx = Math.random() * 10 * xDirection //atrums
let dy = Math.random() * 10 * yDirection//atrums
//let dx = 2; let dy = 2 //atrums

//sarkanie varti------------------------
let vartiSarkanieRadius = 200

// stubborn player
let stX = innerWidth / 2; let stY = innerHeight / 4;
let stdx = 1.5; let stdy = 3.0 //atrums
let stR = 10 //radius

function animetZupu() {
    requestAnimationFrame(animetZupu)
  c.clearRect(0, 0, innerWidth, innerHeight)

   ///varti - sarkanie
   c.beginPath()
   c.arc(innerWidth / 2, innerHeight + 180, vartiSarkanieRadius, 0, Math.PI * 2, false)
   c.fillStyle = "red"
   c.fill()

    //STUBBORN PLAYER
    c.beginPath()
    c.arc(stX, stY, stR, 0, Math.PI * 2, false)
    c.fillStyle = "blue"
    c.fill()


    // ball
    c.beginPath()
    c.arc(x, y, radius, 0, Math.PI * 2, false)
    c.fillStyle = "yellow"
    c.fill()

    //line H hipotenuza
    c.beginPath()
    c.moveTo(stX, stY)
    c.lineTo(x, y)
    //stroke method
    c.strokeStyle = "black"
    c.stroke()

    //line A verticala katete
    c.beginPath()
    c.moveTo(stX, stY)
    c.lineTo(stX, y)
    //stroke method
    c.strokeStyle = "black"
    c.stroke()

    //line horizontala katete
    c.beginPath()
    c.moveTo(stX, y)
    c.lineTo(x, y)
    //stroke method
    c.strokeStyle = "black"
    c.stroke()



    if (x + radius > innerWidth - 5 || x - radius < 5) {
        dx = -dx * 1.1
    }

    if (y + radius > innerHeight - 5 || y - radius < 5) {
        dy = -dy * 1.1
    }
//bounce away
    if (((Math.sqrt(Math.pow(stX - x, 2) + Math.pow(stY - y, 2)) -
        stR - radius)) < 0)
    {
        dx = stdx * 2
        dy = stdy * 3
    }

    


    //GOAL GOAL GOAL GOAL GOAL GOAL GOAL GOAL GOAL 

    if (((Math.sqrt(Math.pow(innerWidth / 2 - x, 2)+Math.pow(innerHeight +180 - y,2))) -
    vartiSarkanieRadius - radius) < 0){
    dx = 0
    dy = 0
            stdx = 0
            stdy = 0

            //print GOAL!
            c.fillStyle = "black"
            c.font = "50px Arial "
            feedbackBall = "Goal"
            c.fillText(feedbackBall, 20,40)
    }

    //slowing down ball
    dx *= 0.995
    dy *= 0.995


    //movenment of ball
    x += dx
    y += dy

//stupborn directions
    if (stX + stR > innerWidth || stX - stR < 0) {
        stdx = -stdx
    }

    if (stY + stR > innerHeight || stY - stR < 0) {
        stdy = -stdy
    }
    
  // if ((stX - x) < 0 ||(stY - y) <0 || innerWidth / 2 > x){
//newsd
//stdy = - 0.5 *   stdx * stdx + 3 * stdx -3
//   }



//movenment of stupborn player
stX += stdx
stY += stdy


    ///coordinates feedback

    //moving circle coordinate feedback
    c.fillStyle = "black"
    c.font = "10px Arial "
    feedbackBall = "x=" + Math.round(x) + " y=" + Math.round(y)
    c.fillText(feedbackBall, x, y + 10)

    //Stubborn coordinates
    c.fillStyle = "black"
    c.font = "10px Arial "
    feedbackStubborn = "x=" + (stX) + " y=" + (stY)
    c.fillText(feedbackStubborn, stX, stY)

    //90 degree angle coordinates
    c.fillStyle = "black"
    c.font = "10px Arial "
    feedback90 = "x=" + (stX) + " y=" + (y)
    c.fillText(feedback90, stX, y)


    //b garums
    c.fillStyle = "black"
    c.font = "10px Arial "
    feedbackVert = "b garums=" + (stY - y)
    c.fillText(feedbackVert, stX, stY - (stY - y) / 2 - 10)

    // a garums
    c.fillStyle = "black"
    c.font = "10px Arial "
    feedbackHori = "a garums=" + (stX - x)
    c.fillText(feedbackHori, x + (stX - x) / 2, y - 10)

    //hipotenuzas garuma raaditajs
    c.fillStyle = "black"
    c.font = "10px Arial "

    
    feedbackLenghtAndDistance = " h garums=" +
        Math.round(Math.sqrt(Math.pow(stX - x, 2) + Math.pow(stY - y, 2))) +
        " rl attalums=" +
        Math.round((Math.sqrt(Math.pow(stX - x, 2) + Math.pow(stY - y, 2))) -
            stR - radius)

    c.fillText(feedbackLenghtAndDistance, x + (stX - x) / 2, stY - (stY - y) / 2)



}

animetZupu()