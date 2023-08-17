var player;

function setup() {
  createCanvas(900,800);
  
   player = createSprite(160,200,25,30)
   player.shapeColor= "yellow"
}

function draw() 
{
  background("purple");

if(keyDown("w")){
player.y-= 5;


}
if(keyDown("s")){
  player.y+= 5;
  
  
  }
  if(keyDown("a")){
    player.x-= 5;
    
    
    }
    if(keyDown("d")){
      player.x+= 5;
      
      
      }
  drawSprites();

}




