var x=5;
var y;
var speed=4;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(3, 14, 165);
  
  stroke(100);
  line(mouseX, mouseY, 200, 100);
  
  fill(232, 249, 202);
  ellipse(200,100,20,20);
  
  x = x+speed;
  y=y+speed;
  
  if(y>height || y<0){
    speed = -speed;
   
  }
  
  fill (224, 220, 215);
  ellipse(mouseX, mouseY, 75, 75);
  
  fill (7, 7, 7);
  ellipse(mouseX, mouseY, 55, 55);
  
  fill (255);
  ellipse(mouseX, mouseY, 30, 30);
  
  if(mouseX<220){
  fill (random(249), 190, random(112));
  triangle(200, 500, 300, 200, 400, 500);
  }
}