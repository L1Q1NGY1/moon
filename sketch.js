function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  angleMode(DEGREES);
  
  frameRate(20);
}

function draw() {
    

  push();
  translate(windowWidth/2,windowHeight/2);
  rotate(frameCount*6);
  noStroke();
  fill(lerpColor(color(92,0,26,10), color(6,94,130,10), frameCount/200));
    
  rect(100,0,50+frameCount*6,50+frameCount*6);
  pop();
    
  fill(200);  
  textAlign(CENTER);
  textSize(18);
  textFont('roboto slab');
  //text('Happy Moon Festival !',windowWidth/1.95,windowHeight*4.3/5);   

}
