var car, wall;
var speed, weight;
var deformation;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  speed = random(10,60)
  weight = random(100,400)
  deformation = 0.5*weight*speed*speed/22500
  
  car = createSprite(200,200,20,20)
  wall = createSprite(700,200,30,100)

  car.velocityX = speed;

  console.log(speed);

}

function draw() {
  background(0,0,0);
  if(wall.x - car.x < wall.width/2 + car.width/2){
    if(deformation < 20){
    car.shapeColor = rgb(0,255,0)
  }

  if(deformation > 10 && deformation < 50){
    car.shapeColor = rgb(230,230,0)
  }

  if(deformation > 50){
    car.shapeColor = rgb(255,0,0)
  }
}
  drawSprites();
}