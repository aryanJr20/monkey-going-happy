var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup,obstaclesGroup
var score,collider

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  roadImage = loadImage("road.png")
}



function setup() {
   collider = createSprite(300,350,2000,1)
backgroundImage = createSprite(400,200,400,400)
  backgroundImage.addImage(roadImage)
  backgroundImage.velocityX = -4
  monkey = createSprite(100,300)
  monkey.addAnimation("run",monkeyRunning)
  monkey.scale = 0.1
   foodGroup=new Group()
 obstacleGroup=new Group()
}


function draw() {
background("white")
  
  console.log(monkey.y)

  monkey.collide(collider)
  if(keyDown("space")&&monkey.y>=260){
     monkey.velocityY =-35
     
     }
  if(backgroundImage.x ===-100 ){
     backgroundImage.x = 400
     }
      monkey.velocityY=monkey.velocityY+3
if(monkey.isTouching(foodGroup)){
   foodGroup.destroyEach();
   
}
  
  createObstacles();
  createFruits();
  drawSprites();
  textSize(20)
  text("SURVIVAL TIME  :  "+Math.round(frameCount/60),100,100)
}
function createFruits(){
  if(frameCount%80===0){
     banana = createSprite(500,100)
       banana.addImage(bananaImage)
       banana.scale = 0.1
     banana.velocityX = -4
    banana.lifetime = 700
    foodGroup.add(banana)
     }
  
}
function createObstacles(){
  if(frameCount%200===0){
     obstacle = createSprite(500,330)
  obstacle.velocityX = -4
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.lifetime = 700
    obstacleGroup.add(obstacle)
     }
}





