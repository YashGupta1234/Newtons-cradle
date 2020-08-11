const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var ground, rope1;

function preload()
{
	
}
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	 //Create the Bodies Here.
	
	ground = new Roof(width/2,height/4,width/7,20);

	bob1 = new Bob(800,500,100,100);
	bob2 = new Bob(700,500,100,100);
	bob3 = new Bob(600,500,100,100);
	bob4 = new Bob(900,500,100,100);
	bob5 = new Bob(1000,500,100,100);

	rope1 = new Rope(bob1.body, ground.body, -100, 0);
	rope2 = new Rope(bob2.body, ground.body, -50, 0);
	rope3 = new Rope(bob3.body, ground.body, 0, 0); 
 	rope4 = new Rope(bob4.body, ground.body, 50, 0); 
	rope5 = new Rope(bob5.body, ground.body, 100, 0);
	
	  Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(255,0,0);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	ground.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	drawSprites();
}