
var block1, block2, block3, block4;
var ball;
var music,edges;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
   ball.velocityX=3;
   ball.velocityY=3;

   
    block1=createSprite(100,590,180,20);
    block1.shapeColor="red";

    block2=createSprite(300,590,180,20);
    block2.shapeColor="green";

    block3=createSprite(500,590,180,20);
    block3.shapeColor="blue";

    block4=createSprite(700,590,180,20);
    block4.shapeColor="yellow";

    

}

function draw() {
    background("grey");
   
    edges=createEdgeSprites();
    ball.bounceOff(edges);

   
  if(isTouching(ball,block4)){
    music.play();
    ball.shapeColor="yellow";
    bounceOff(ball,block4);
    
  }
  
  else if(isTouching(ball,block3)){
    music.stop();
    ball.shapeColor="blue";
    bounce(ball,block3);
   
  }
    
  else if(isTouching(ball,block2)){
    music.stop();
    ball.shapeColor="green";
    bounceOff(ball,block2);
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(isTouching(ball,block1)){
    music.stop();
    ball.shapeColor="red";
    bounceOff(ball,block1)
  }


  
   
    drawSprites()
}
