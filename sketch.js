function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  fill(map(mouseX,0,width, 0, 255));
  ellipse(width/2, height/2, 100,100)
  
}