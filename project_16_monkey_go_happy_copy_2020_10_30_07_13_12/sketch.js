
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivaltime
function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

 monkey=createSprite(100,520,30,30)
 monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.13

  ground=createSprite(300,565,600,10);

 ground.velocityX=-3;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  monkey.depth = ground.depth
  
monkey.collide(ground);
  score = 0;
  survivaltime=0;
  
}


function draw() {
background("lightblue")
  
  if (keyDown("space")){
    monkey.velocityY = monkey.velocityY - 0.8  ;

  }
    monkey.velocityY = monkey.velocityY+0.8;

                                     
  if (ground.x < 300){
      ground.x = ground.width/2;
  }
  
  if (monkey.isTouching(bananaGroup)){
    score = score + 2;
    bananaGroup.destroyEach()
  }
   spawnbanana();
   spawnobstacles();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,100,50)
  
  monkey.collide(ground);
  drawSprites();
}
function spawnbanana(){
  if (frameCount % 80 === 0){
    banana = createSprite(600,520,50,50);
    banana.y = Math.round(random(350,450));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX = -3;
    banana.lifetime=180;
    bananaGroup.add(banana);
    
  }
}
function spawnobstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(600,520,50,50);
    obstacle.x = Math.round(random(600,600));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
    obstacle.lifetime=180;
  }
}