
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box,bg,boy;

function preload()
{
bg = loadImage("bg.jpg")
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground()
	boy = new Boy()
	ball = new Ball()
	
	box = new Box()
	
	

	
	
	
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(bg);
  boy.display()
  ball.display()
  ground.display()
  box.display()
 
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})


}
}


