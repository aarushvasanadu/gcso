var car1,car2,car3
var wall1,wall2,wall3
var speed,weight
function setup() {
  createCanvas(800,800);
  wall1 = createSprite(700,100,50,100)
  wall2 = createSprite(700,300,50,100)
  wall3 = createSprite(700,500,50,100)
  car1 = createSprite(100,100,50,50)
  car2 = createSprite(100,300,50,50)
  car3 = createSprite(100,500,50,50)
  speed1 = random(55,90)
  speed2 = random(55,90)
  speed3 = random(55,90)
  weight1 = random(400,1500)
  weight2 = random(400,1500)
  weight3 = random(400,1500)
  
  
  car1.velocityX = speed1
  car2.velocityX = speed2
  car3.velocityX = speed3
  

}

function draw() {
  background("black");  
  //collission detection of car1
  if(wall1.x-car1.x<wall1.width/+car1.width/2){
    car1.velocityX = 0
    var deformation = 0.5*weight1*speed1*speed1/22509;
    if(deformation>180){
      car1.shapeColor = "red"
    }
    if(deformation<180 & deformation>100){
      car1.shapeColor = "yellow"
    }
    if(deformation<100){
      car1.shapeColor = "green"
    }
  }
   //collission detection of car2
   if(wall2.x-car2.x<wall2.width/+car2.width/2){
    car2.velocityX = 0
    var deformation = 0.5*weight2*speed2*speed2/22509;
    if(deformation>180){
      car2.shapeColor = "red"
    }
    if(deformation<180 & deformation>100){
      car2.shapeColor = "yellow"
    }
    if(deformation<100){
      car2.shapeColor = "green"
    }
  }
  //collission detection of car3
  if(wall3.x-car3.x<wall3.width/+car3.width/2){
    car3.velocityX = 0
    var deformation = 0.5*weight3*speed3*speed3/22509;
    if(deformation>180){
      car3.shapeColor = "red"
    }
    if(deformation<180 & deformation>100){
      car3.shapeColor = "yellow"
    }
    if(deformation<100){
      car3.shapeColor = "green"
    }
  }
  drawSprites();
  
}