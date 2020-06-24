const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var redZone;
var redZone2;
var redZone3;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	redZone = new Holder(400,680,200,10,options);
	redZone2 = new Holder(360,680,10,100,opptions);
	redZone3 = new Holder(440,680,10,100,options); 
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.8, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  packageSprite.collide(redZone);
  packageSprite.collide(redZone2);
  packageSprite.collide(redZone3);
  
  redZone.display();
  redZone2.display();
  redZone3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

  }
}



