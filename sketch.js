
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var background,backgroundImage
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage=loadImage("jungle.jpg");
}



function setup() {
  createCanvas(800,400)
background=createSprite(0,0,800,400);
  background.addImage(backgroundImage)
  background.scale=1.5;
  background.x=background.width/2
  background.velocityX=-4
  
  var survivalTime=0 
  
  monkey=createSprite(80,310,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  ground.visible=false
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  
  score=0;
  
  
}


function draw() {
  
   
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(background.x<100){
    background.x=background.width/2
}
  
  
  spawnFood();
  spawnObstacles();
  
  if(keyDown("space")){monkey.y=monkey.y-18}
   
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  
drawSprites()
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+score,500,50)
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityX=0;
    obstaclesGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0);
    background.velocityX=0
    FoodGroup.destroyEach()
  }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
  
  
}


function spawnFood(){
  if(frameCount%80==0){
    banana=createSprite(600,240,50,10)
    banana.y=random(120,200);
    banana.velocityX=-6;
    banana.lifetime=300;
    monkey.depth=banana.depth+1
    banana.addImage(bananaImage)
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%200==0){
  obstacle=createSprite(800,320,10,40);
  obstacle.velocityX=-6;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.lifetime=300;
  obstaclesGroup.add(obstacle);}
  
  var rand=Math.round(random(1,6));
  switch(score){
    case 10:player.scale=0.12;
       break;
       case 20:player.scale=0.14;
      break;
      case 30:player.scale=0.16;
      break;
      case 40:player.scale=0.18;
      break;
      default:break;
  }
  
    
  
}






