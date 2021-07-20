function setup() {
  createCanvas(1200,800);
  fRect = createSprite(800, 400, 50, 80);
  fRect.shapeColor = "green";
  fRect.velocityX = -5;
  mRect = createSprite(400,400,80,30);
  mRect.shapeColor = "green";
  mRect.velocityX = 5;
}

function draw() {
  background("black");
 
 if( fRect.x - mRect.x < fRect.width/2 + mRect.width/2 &&
   fRect.x - mRect.x < fRect.width/2 + mRect.width/2){
    
    mRect.velocityX = mRect.velocityX*(-1);
    fRect.velocityX = fRect.velocityX*(-1);
 } 
 
  drawSprites();
}