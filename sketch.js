var cat, catImage1, catImage2, catImage3, mouse, mouseImage1, backG, scene;
function preload() {
    //load the images here
  backG = loadImage("images/garden.png");
  catImage1 = loadAnimation("images/tomOne.png");
  catImage2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
  catImage3 = loadAnimation("images/tomFour.png")
  mouseImage2 = loadAnimation("images/jerrytwo.png","images/jerrythree.png");
  mouseImage1 = loadAnimation("images/jerryOne.png");
  mouseImage3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
   
   scene = createSprite(350,350,1000,800);
   scene.addImage("backGroundImage", backG);
   //scene.scale = 1.5;

   //create tom and jerry sprites here
   cat = createSprite(700,550,10,10);
   cat.addAnimation("tomsittng",catImage1);
   cat.scale = .19;

   mouse = createSprite(100,550,10,10);
   mouse.addAnimation("mouseStanding",mouseImage1);
   mouse.scale = .15
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide
if ((cat.x - mouse.x) < (cat.width - mouse.width)/2+130){
   cat.velocityX = 0;
   cat.addAnimation("tom3",catImage3);
   cat.changeAnimation("tom3");
   
   mouse.addAnimation("mouse3",mouseImage3);
   mouse.changeAnimation("mouse3");
   }
    console.log(cat.width - mouse.width);
    console.log(cat.x)
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("tomrunning",catImage2);
  cat.changeAnimation("tomrunning");

  mouse.addAnimation("mouseteasing",mouseImage2);
  mouse.changeAnimation("mouseteasing");
}

}
