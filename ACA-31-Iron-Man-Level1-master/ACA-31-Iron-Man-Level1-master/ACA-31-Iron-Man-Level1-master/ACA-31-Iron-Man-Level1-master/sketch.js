
var bg, backgroundImg;
var stonesGroup, stoneImage;
var player, player_running, player_collided;
var diamondsGroup, diamondImage;
var diamondScore=0;

function preload() {
  bgImage = loadImage("images/bg.jpg");
  playerImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");
  diamondImage = loadImage("images/diamond.png");
 
}

function setup() {
  createCanvas(1000, 600);

//create background sprite
  bg = createSprite(580,300);
  bg.scale = 2;
  bg.addImage(bgImage);
 

//create player sprite
  player = createSprite(10,50,20,20);
  player.addImage(playerImage);
  player.scale = 0.4;

//create groups
  stonesGroup = new Group();
  diamondsGroup = new Group();

}

function draw() {
// scroll background
  if (bg.y < 100) {
    bg.y=bg.width/4;
  }



//move up
  if (keyDown("up")){
    player.velocityY = -10;
  }

//move left
  if (keyDown("left")) {
    player.x = player.x - 5;
  }

//move right
  if (keyDown("right")) {
    player.x = player.x + 5;
  }

//gravity
  player.velocityY = player.velocityY + 0.5; 

//call the function to generate stones
  generateStones();

//make player step(collide) on stones
 for(var i = 0 ; i< (stonesGroup).length ;i++){
    var temp = (stonesGroup).get(i) ;
    
    if (temp.isTouching(player)) {
       player.collide(temp);
      }
    }

    //call the function to generate diamonds
    generateDiamonds();

    //make player to catch the diamonds
    for(var i = 0 ; i< (diamondsGroup).length ;i++){
      var temp = (diamondsGroup).get(i) ;
      
      if (temp.isTouching(player)) {
        //increase score when diamond is caught
        diamondScore++;
        //destroy diamond once it is caught
        temp.destroy();
        temp=null;
        }

}

//draw sprites on the screen
    drawSprites();
    textSize(20);
  fill("brown");
//display score
text("Diamonds Colllected: "+ diamondScore, 500,50);
   
}

function generateStones() {
  if (frameCount % 100 === 0) {
    var stone = createSprite(1200,120,40,10);
    stone.x = random(150,1000);
    stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityY = 2;
    
    stone.lifetime =800;
    stonesGroup.add(stone);
  }
}

function generateDiamonds() {
  if (frameCount % 50 === 0) {
    var diamond = createSprite(1200,120,40,10);
    diamond.x = Math.round (random(150,1000));
    diamond.addImage("diamond", diamondImage);
    diamond.scale = 0.5;
    diamond.velocityY = 3;
    diamond.lifetime =1200;
    diamondsGroup.add(diamond);
  }
}














