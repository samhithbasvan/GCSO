var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(200, 200, 30, 30);
  wall = createSprite(500,200, 30 ,200);
  car.shapeColor = "black";
  wall.shapeColor =  color(80,80,80);

  //randomising velocities
  speed=random(55,90);
  car.velocityX = speed;
  weight=random(400,1500);
}

function draw() {
  background(25,05,100);
  if (wall.x - car.x < (car.width + wall.width)/2 ){
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed / 22509;

      //deformation for above average
      if (deformation > 180)
      {
          car.shapeColor = color(255,0,0);
      }

      //deformation for amidst average
      if (deformation < 180 && deformation > 100)
      {
          car.shapeColor = color(230,230,0);
      }

      //deformation for good, no-harming accident
      if (deformation < 100)
      {
        car.shapeColor = color(0,205,0);
      }
  }
  
  if (mousePressedOver(car)){
      car.x = 200;
      car.y = 200;
      car.shapeColor =  "black";

  }

  if (keyWentDown("space")){
    car.x = 200;
    car.y = 200;
    car.shapeColor =  "black";
    //randomising velocities
  speed=random(55,90);
  car.velocityX = speed;
  }
  drawSprites();
  
}