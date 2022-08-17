var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var cloud
var cloud2
var cloud3

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
cloudImg = loadImage("assets/cloud.png")
cloud2Img = loadImage("assets/cloud.png")
cloud3Img = loadImage("assets/cloud.png")
cloud4Img = loadImage("assets/cloud.png")
cloud5Img = loadImage("assets/cloud.png")
birdImg = loadImage("assets/kindpng_751551.png")
bird2Img = loadImage("assets/pngfind.com-flock-of-birds-png-131403.png")
waspImg = loadImage("assets/587936.jpg")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


cloud = createSprite(380,180,10,20);
cloud.addImage(cloudImg)
cloud.scale=0.05

cloud2 = createSprite(70,120,10,20);
cloud2.addImage(cloud2Img)
cloud2.scale=0.1

cloud3 = createSprite(225,150,10,20);
cloud3.addImage(cloud3Img)
cloud3.scale=0.05

cloud4 = createSprite(380,10,10,20);
cloud4.addImage(cloud4Img)
cloud4.scale=0.05

cloud5 = createSprite(270,135,10,20);
cloud5.addImage(cloud5Img)
cloud5.scale=0.04


bird = createSprite(110,70,10,20);
bird.addImage(birdImg)
bird.scale=0.02

bird2 = createSprite(260,200,10,20);
bird2.addImage(bird2Img)
bird2.scale=0.03

wasp =createSprite(40,300,10,20);
wasp.addImage(waspImg)
  wasp.scale=0.03

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
         if(keyDown("LEFT")) {
          balloon.velocityX = -5;
         }
         if(keyDown("RIGHT")) {
          balloon.velocityX = 5;
         }
         if(keyDown("DOWN")) {
          balloon.velocityY = 5;
         }
          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}