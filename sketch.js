var wall,car,speed,weight;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1200, 200, 60, 200);

  wall.shapeColor="green";
  wall.debug=true;


  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  car.debug=true;



  speed=Math.round(random(55,90));
  car.velocityX=speed;

  weight=Math.round(random(400,1500));
}

function draw() {

  background("white");  
  
  


  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
  
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
     }

     if(deformation<100){
      car.shapeColor="green"
     }
  }

  

  drawSprites();
}




  