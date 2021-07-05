var bath,brush,drink,eat,gym,bg,move,sleep,astronaut,iss;

function preload(){
  bath = loadAnimation("./Astronaut's daily routine/bath1.png","./Astronaut's daily routine/bath2.png");
  brush = loadImage("./Astronaut's daily routine/brush.png");
  drink = loadAnimation("./Astronaut's daily routine/drink1.png","./Astronaut's daily routine/drink2.png");
  eat =  loadAnimation("./Astronaut's daily routine/eat1.png","./Astronaut's daily routine/eat2.png");
  gym = loadAnimation("./Astronaut's daily routine/gym1.png","./Astronaut's daily routine/gym2.png","./Astronaut's daily routine/gym11.png","./Astronaut's daily routine/gym12.png");
  bg = loadImage("./Astronaut's daily routine/iss.png");
  move = loadAnimation("./Astronaut's daily routine/move.png","./Astronaut's daily routine/move1.png");
  sleep = loadImage("./Astronaut's daily routine/sleep.png");

}
function setup() {
  createCanvas(800,400);

  iss=createSprite(800,400);
  iss.addImage("image",bg);

  astronaut=createSprite(300,230);
  astronaut.addImage("sleep",sleep);
  astronaut.scale=0.1;

  createEdgeSprites();
}

function draw() {
  background(255,255,255);  

  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=10;
    astronaut.velocityY=10;
    astronaut.bounceOff(edges);
  }


  drawSprites();
}