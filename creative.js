let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d")


//---forloops drawing 3 red arcs--------------

function drawRedCircle(){
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "red";
        c.stroke();
}

for(let i = 0; i < 3; i++){
        let radius = 120;
        let optimalX = window.innerWidth - radius;
        let optimalY = window.innerHeight - radius;
        let x = Math.random() * optimalX;
        let y = Math.random() * optimalY;


        /* x and y adjustment so the circle
         dont go out of screen
        */
        if (x<radius){
            x=radius
        };

        if(y<radius){
            y=radius
        };
        
        
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI * 2, false);
            c.strokeStyle = "red";
            c.stroke();

};



//---forloops drawing 6 blue arcs---

for(let i = 0; i < 6; i++){
    let radius = 60;
    let optimalX = window.innerWidth - radius;
    let optimalY = window.innerHeight - radius;
    let x = Math.random() * optimalX;
    let y = Math.random() * optimalY;


    /* x and y adjustment so the circle
     dont go out of screen
    */
    if (x<radius){
        x=radius
    };

    if(y<radius){
        y=radius
    };
    

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
};

//---forloops drawing 12 green arcs---

for(let i = 0; i < 12; i++){
    let radius = 30;
    let optimalX = window.innerWidth - radius;
    let optimalY = window.innerHeight - radius;
    let x = Math.random() * optimalX;
    let y = Math.random() * optimalY;


    /* x and y adjustment so the circle
     dont go out of screen
    */
    if (x<radius){
        x=radius
    };

    if(y<radius){
        y=radius
    };
    

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "green";
    c.stroke();
};