function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    ellipseMode(RADIUS);

}


function draw() {
        background(0);
    textSize(12);
    colorMode(RGB, 255, 255, 255);
    fill(175, 175, 175);
    text("press down and hold to stop...", windowWidth/2 - 45, windowHeight - 70);
    drawGradient(windowWidth/2, windowHeight/2, random(130, 150), 2);
}

function mousePressed(){
noLoop();
}
function mouseReleased(){
loop();
}

function drawGradient(x, y, ran, comp) {
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    var radius = 160;
    for (var r = radius; r > 0; --r) {
        fill(ran, 200 - 2 * r, 200 - 2 * r);
        ellipse(x, y, r, r);
        ran = (ran + comp) % 360;
    }
}


