/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperWaste;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperWaste = new Paper(650,200);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paperWaste.display();

 
}
*/

var HTD1, HTD2;
var pic1, pic2;

function preload(){
  HTD1 = loadImage("HTD_gif(3).png");
  HTD2 = loadImage("HTD_gif(2).webp");
}

function setup(){
  createCanvas(600, 600);
  
 
}

function draw(){
  background("black");
  
  if(keyWentDown(RIGHT_ARROW)){
    pic1 = createSprite(500, 500, 100, 100);
    pic1.addImage(HTD1);
    }

  if(keyWentDown(DOWN_ARROW)){
     pic2 = createSprite(100, 100, 100, 100);
  pic2.addImage(HTD2);
  }

  if(keyDown(UP_ARROW)){
    textSize(24);
    fill("red");
    stroke("blue");
    strokeWeight(3);
    text("Thank you for being such an amazing teacher ma'am!!!", 2, 300);
  }
  drawSprites();
}