var sandy=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(229,164,196); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {
  
   // an RGB color for the circle's border
  strokeWeight(0);
  fill(230,111,82,sandy); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,60,sandy); // center of canvas, 20px dia
  
  fill(random(0,255),120,177,mouseX);
  
  rect(random(50,200),random(height),100,50);
  strokeWeight(3);
  stroke(241,117,88);
  line (50,150,400,mouseY);
  textSize(75);
  textFont("Garamond");
  text('PARTY',250,200);

}

function mousePressed(){

  if (sandy>=255)
   {sandy=0;
} else {

  sandy=sandy+10;}

  
}
