let color = (241, 196, 112);
let angle = 5;
let x = 0;
let z = 20;
let y = 0;
let speedZ = 4;
let speedY = 4;

function setup () {
	createCanvas(900,400);
    angleMode(DEGREES);
	
}

function draw ()  {
  
clear();
background('pink');
  
fill (color);
ellipse(mouseX,mouseY,20,20);

push();
rotate(angle)
fill('hsl(160, 100%, 50%)')
rect(200,2,40,40);
pop();

fill(149, 125, 173)
ellipse(x,200,30,30);
x=x+1;
if(x>600){
       x=0;
   }
 
ellipse(z,y,20,20);
	z += speedZ;
	y += speedY;
  
if (z > .5*width || z < 0) {
		speedZ *= -1;
	}
	
	if (y > height || y < 0) {
		speedY *= -1;
	}
  
text('keep clicking to see the square move! :}', 10, 390);



}

function mouseClicked(){

	if (mouseClicked){
		color = 'lightblue';
	}


}
  
  
function mousePressed() {
   angle = angle + 10;
}
  
  