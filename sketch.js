var bullet, wall, thickness;
var speed, weight;
var Ground;



function setup() {

  createCanvas(1365, 656);

  thickness = random(22, 83)

  ground = createSprite(682.5, 328, 1265, 378)
  bullet = createSprite(50, 325, 100, 10);
  wall = createSprite(1200, 328, thickness, 328);

  ground.shapeColor =rgb(10, 150, 201)
  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);

  speed = random(223, 321);
  weight = random(30, 52);
  
  
  bullet.velocityX=speed;

}



function draw() {

  background(255, 290, 150);

  

  fill(255, 0, 0);
  textSize(50);
  textFont("Kristen ITC");
  text("Wall reliability test", 482.5, 100);
  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX= 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);

      fill(255, 0, 0);
      textSize(50);
      textFont("Kristen ITC");
      text(" This wall is not Safe ", 440, 615);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);

      fill(255, 0, 0);
      textSize(50);
      textFont("Kristen ITC");
      text(" This wall is Safe ", 515, 615);
    }
    
  }
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
  var bulletRightEdge=Lbullet.x+Lbullet.width;
  var  wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}