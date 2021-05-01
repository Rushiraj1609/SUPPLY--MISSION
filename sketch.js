var PLAY = 1;
var END = 0;
var gameState = PLAY;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ground2,ground2Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
    ground2Img=loadImage("ground2.png");
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	

}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

    
    ground2=createSprite(500,350,10,10);
	ground2.addImage(ground2Img);
	ground2.scale=1.5

    	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.16

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,0.1);
	groundSprite.shapeColor=color(255)


	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 204 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=90;
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);
    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);
    boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	box2Position=710;
 	box2Y=610;


 	box2leftSprite=createSprite(box2Position, box2Y, 20,100);
 	box2leftSprite.shapeColor=color(255,0,0);

 	box2LeftBody = Bodies.rectangle(box2Position+20, box2Y, 20,100 , {isStatic:true} );
 	World.add(world, box2LeftBody);

 	box2Base=createSprite(box2Position+100, box2Y+40, 200,20);
 	box2Base.shapeColor=color(255,0,0);

 	box2BottomBody = Bodies.rectangle(box2Position+100, box2Y+45-20, 200,20 , {isStatic:true} );
 	World.add(world, box2BottomBody);

 	box2rightSprite=createSprite(box2Position+200 , box2Y, 20,100);
 	box2rightSprite.shapeColor=color(255,0,0);

 	box2RightBody = Bodies.rectangle(box2Position+200-20 , box2Y, 20,100 , {isStatic:true} );
 	World.add(world, box2RightBody);


	box3Position=400;
 	box3Y=610;

    box3leftSprite=createSprite(box3Position, box3Y, 20,100);
 	box3leftSprite.shapeColor=color(255,0,0);
    box3Base=createSprite(box3Position+100, box3Y+40, 200,20);
 	box3Base.shapeColor=color(255,0,0);
    box3rightSprite=createSprite(box3Position+200 , box3Y, 20,100);
 	box3rightSprite.shapeColor=color(255,0,0);

 	
   
   
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

	
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
	if(keyDown(LEFT_ARROW)){
		helicopterSprite.x=helicopterSprite.x-10;
		Matter.Body.translate(packageBody,{x:-10,y:0})
	}
  
	if(keyDown(RIGHT_ARROW)){
	  helicopterSprite.x=helicopterSprite.x+10;
	  Matter.Body.translate(packageBody,{x:+10,y:0})
	}
  
	 if(keyDown("space")){
		 Matter.Body.setStatic(packageBody,false)
		 
			
	
  
	 
    
	 
  }


 
  drawSprites();
  
  
 
}
