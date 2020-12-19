var bullet,wall;
var speed,weight,thickness;


function setup() 
{
  createCanvas(1095,500);

  speed=random(40,90);
  weight=random(400,1500);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,70,10);
  bullet.shapeColor="white";
  wall=createSprite(1035,200,thickness,width/2);

 
}

function draw() 
{
  background(0,0,0)

  

 bullet.velocityX=speed;

 if(bullet.isTouching(wall))
  {
   if(wall.x-bullet.x < (bullet.width+wall.width)/2)
   {
     bullet.velocityX=0;
     var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
     console.log(damage);
     if(damage>10)
     {
       wall.shapeColor="red";
     }
     
     if(damage<10)
     {
       wall.shapeColor="yellow";
     }
   }
 }
  drawSprites();
}