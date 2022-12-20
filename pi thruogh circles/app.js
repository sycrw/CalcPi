function setup(){
    createCanvas(1000,1000);
    fill(100,0,255);
    ellipse(500,500,1000,1000);
}
let points = 0;
let pointsInCircle = 0;
let pi = 0;

function draw(){
    
}
function addOneHunderedPoints(){
    for(let i = 0;i< 100;i++){
        addPoint();
    }
    calcPI();
}
function addTenPoint(){
    for(let i = 0;i< 10;i++){
        addPoint();
    }
    calcPI()
}
function addOnePoint(){
    addPoint();
    calcPI();
}
function addPoint(){
    fill(255,0,0);
    let x;
    let y;
    x = random(0,1000);
    y = random(0,1000)
    ellipse(x,y,10,10);
    points++;
    console.log(dist(500,500,x,y));
    if(dist(500,500,x,y)<500){
        pointsInCircle++;
    }
    console.log("points: " + points + " InCircle: "+ pointsInCircle);
}
function calcPI(){
    let piDisplay = document.getElementById("pi");
    pi =4 * (pointsInCircle/points);
    piDisplay.innerHTML = "pi = " + pi;
    
}


function pressButton(){
    console.log("buttonPressed");
}