var car, wall;

var speed, weight;

function setup() {
  createCanvas(1300, 400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = ("lightblue");

  wall = createSprite(1150,200,30,200);
  wall.shapeColor = ("white");

  speed = random(55,120);
  weight = random(400,1500);
}

function draw() {
  background("grey");  

  car.velocityX = speed;

  for (var i = 0; i < 1300; i = i + 50) {
    fill("black");
    line(i,200,i+20,200);
  }

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation < 100 ){
      car.shapeColor = ("green");
      fill("white");
  textSize(25);
      text("Safe!!",630,300);
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = ("yellow");
      fill("white");
  textSize(25);
      text("Mild Damage",630,300);
    }

    if(deformation > 180){
      car.shapeColor = ("red");
      fill("white");
  textSize(25);
      text("Unsafe. Fatal.",620,300);
    }
    }

  drawSprites();
  fill("white");
  textSize(25);
  text("Car", 80, 270);

  text("Wall", 1125, 340);
}