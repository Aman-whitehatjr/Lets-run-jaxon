var runner, runner_running
var bomb
var coin
var energy_drink
var power 
var ground, invisibleGround, groundImage



function preload(){
runner = loadImage ("Runner-1.png", "Runner-2.png") 
bomb = loadImage ("bomb.png")
coin = loadImage ("coin.png")
energy_drink = loadImage ("energy_drink.png")
ground = loadImage ("path.png")
}

function setup(){
  createCanvas(200,600)
  //create sprites here

  runner = createSprite(50,160,20,50);
  runner.addAnimation("runner", runner_running);
  runner.scale = 0.5;

  ground = createSprite(600,100,400,20);
  ground.addImage("ground",groundImage);
  ground.y = ground.hieght /2;
  ground.velocityY = -4;
  
  invisibleGround = createSprite(600,100,400,10);
  invisibleGround.visible = false

}

function draw() {
  background(blue)
  runner.x = World.mouseX;

runner.collide(invisibleGround)
  drawSprites()
}
