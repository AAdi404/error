var p1;
var p2;
var obstacle1;
var obstacle2;
var movingRect;
var fixedRect;
function setup(){
createCanvas(1200,800);
fixedRect=createSprite(600, 400, 50, 80);
fixedRect.shapeColor="green";
fixedRect.debug=true;
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;
obstacle1=createSprite(200,100,50,50);
obstacle1.shapeColor="green";
obstacle1.debug=true;
obstacle2=createSprite(300,100,50,50);
obstacle2.shapeColor="green";
obstacle2.debug=true;
}
function draw() {
background(0,0,0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(isTouching(obstacle1,movingRect)){
obstacle1.shapeColor="red";  
movingRect.shapeColor="red";
}
else{
obstacle1.shapeColor="green";
movingRect.shapeColor="green";
}
if(isTouching(fixedRect,movingRect)){
fixedRect.shapeColor="red";  
movingRect.shapeColor="red";
}
else{
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
}
if(isTouching(obstacle2,movingRect)){
obstacle2.shapeColor="red";  
movingRect.shapeColor="red";
}
else{
obstacle2.shapeColor="green";
movingRect.shapeColor="green";
}
drawSprites();
}
function isTouching(p1,p2){
if(p2.x-p1.x<p1.width/2+p2.width/2&&p1.x-p2.x<p1.width/2+p2.width/2&&p2.y-p1.y<p1.height/2+p2.height/2&&p1.y-p2.y<p1.height/2+p2.height/2){
return true;
}
else{
return false;
}  
}