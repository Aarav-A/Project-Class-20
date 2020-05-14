var car,wall;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 60, 60);
  wall = createSprite(800,200,60,200)
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed
  car.shapeColor = "white"
}

function draw() {
  background("black"); 
  
  if(wall.x-car.x <= car.width/2+wall.width/2){
    car.velocityX = 0
    damage = (0.50*weight*speed*speed)/22500  
  }

  if(damage<=100){
    car.shapeColor = "green"
  } else if(damage>100&&damage<=180){
    car.shapeColor = "yellow"
  } else if(damage>180){
    car.shapeColor = "red"
  }
  drawSprites();
}