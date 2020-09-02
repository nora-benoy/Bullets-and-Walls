var wall, bullet;
var thickness, speed, weight;

function setup() {
  createCanvas(400,400);
  
  thickness = random(20,75);
  speed = random(50,100);
  weight = random(20,50);

  wall = createSprite(350,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(200,200,75,20);
  bullet.shapeColor = color(0,0,0);
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255); 

  collision(); 

  drawSprites();
}

function collision() {

if(wall.x-bullet.x<(bullet.width+wall.width)) {
bullet.velocityX = 0;

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10) {
wall.shapeColor = color(255,0,0);
}

if (damage<10) {
wall.shapeColor = color(0,255,0);
}

} 

}