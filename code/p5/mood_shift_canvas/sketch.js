var rSlider, gSlider, bSlider;
var canvas, question, text1, text2, text3, express, express2;
var canvasTouched = false;

function setup() {

  // create canvas
  canvas = createCanvas(710, 400);
  background(220, 220, 220);
  canvas.position(250, 150);
  textSize(15);

  // create sliders
  rSlider = createSlider(0, 200, 0);
  rSlider.position(400, 20);
  gSlider = createSlider(0, 200, 0);
  gSlider.position(400, 50);
  bSlider = createSlider(0, 200, 0);
  bSlider.position(400, 80);

 question = createElement('h1', 'How do you feel?');
 question.position(40, 20);
 text1 = createElement('p', 'Angry?');
 text1.position(550, 5);
 text2 = createElement('p', 'A little anxious perhaps??');
 text2.position(550, 35);
 text3 = createElement('p', 'Or maybe a bit sad?');
 text3.position(550, 65);

 express = createElement('h1', "Express your feelings here...");
 express.position(350, 250);
  express2 = createElement('h1', "press down and drag");
 express2.position(350, 300);

}

function draw() {
  if(mouseIsPressed){
  express.remove();
  express2.remove();
  var r = rSlider.value() + Math.floor(Math.random() * 100);
  if(r > 255){
  	r = 255;}
  var g = gSlider.value() + Math.floor(Math.random() * 100);
  if(g > 255){
  	g = 255;}  
  var b = bSlider.value() + Math.floor(Math.random() * 100);
  if(b > 255){
  	b = 255;}
  fill(r, g, b, 30);
  stroke(255, 255, 255);
  ellipse(mouseX, mouseY, 100, 100);}

}
