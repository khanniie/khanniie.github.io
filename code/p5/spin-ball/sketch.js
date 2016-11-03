var counter2 = 0;


function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    ellipseMode(RADIUS);

}


function draw() {
    background(0);
    drawGradient(windowWidth/2, windowHeight/2, random(130, 150), counter2);
    counter2+= 2;
    fill(255);

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
