
var bg, backgroundImg;
var stonesGroup, stoneImage;
var player, player_running, player_collided;

function preload() {
  bgImage = loadImage("images/bg.jpg");
  playerImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");

 
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.scale = 2;
  bg.addImage(bgImage);
  bg.velocityY = -5;

  player = createSprite(10,50,20,20);
  player.addImage(playerImage);
  player.scale = 0.4;

  stonesGroup = new Group();

 
}

function draw() {

  if (bg.y < 100) {
    bg.y=bg.width/4;
  }

  
  if (keyDown("up")){
    player.velocityY = -10;
  }
  if (keyDown("left")) {
    player.x = player.x - 5;
  }
  if (keyDown("right")) {
    player.x = player.x + 5;
  }
  player.velocityY = player.velocityY + 0.5; 

  generateStones();

 for(var i = 0 ; i< (stonesGroup).length ;i++){
    var temp = (stonesGroup).get(i) ;
    
    if (temp.isTouching(player)) {
       player.collide(temp);
      }
    }

  
 
    
    drawSprites();
    textSize(20);
  fill("brown");
   
}

function generateStones() {
  if (frameCount % 100 === 0) {
    var stone = createSprite(100,100,10,5);
    stone.x = random(80,1000);
    stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityY = 2;
    
    stone.lifetime =800;
    stonesGroup.add(stone);
  }
}

