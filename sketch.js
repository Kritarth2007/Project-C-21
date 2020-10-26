var wall, thickness;
var bullet,speed, weight;



function setup() {
 createCanvas(1200,400);
 thickness = random(22,83)
wall = createSprite(1200, 200, thickness, height/2)
speed = random(223,321)
weight = random(30,52)
bullet = createSprite(10,200,20,10)
bullet.velocityX = speed
}

function draw() {
  background(0); 
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if(damage>10){

       wall.shapeColor = color(255,0,0);
      
  }

  if(damage<10){

    wall.shapeColor = color(0,255,0)
  }
  }
  
  drawSprites();
}

function hasCollided(Lbullet, Lwall){

  bullerRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bullerRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}