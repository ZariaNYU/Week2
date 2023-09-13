let eyewidth = 150;
let facewidth = 300;

function setup() {
    createCanvas (400,600);
    background (0, 0, 0);
}

function draw() {
   fill ("white");
   ellipse (100, 300, eyewidth, eyewidth);
   ellipse (300, 300, eyewidth, eyewidth);
   fill ("white");
   stroke(0);
  ellipse (200, 400, facewidth, facewidth);
  stroke(0);
   fill ("black");
  circle(120, 340, 75);
  circle(260, 340, 75);
  fill ("white");
  circle(140, 360, 30);
  circle(280, 360, 30);
  circle(120, 340, 20);
  circle(260, 340, 20);
  fill ("pink");
  rect(150, 450, 100, 50, 20);
}

