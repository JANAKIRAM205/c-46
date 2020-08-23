var snake1,snake2;
var spider1,spider2,spider3;
var sword,key1,key2,key3;
var box1,box2;
var wall1;









function preload(){
  snake1Image = loadImage("images/snake.png");
  snake2Image = loadImage("images/snake.png");
  spider1Image = loadImage("images/spider.png");
  spider2Image = loadImage("images/spider.png");
  spider3Image = loadImage("images/spider.png");
  swordImage= loadImage("images/sword.jpg");
  key1Image = loadImage("images/key.png");
  key2Image = loadImage("images/key.png");
  key3Image = loadImage("images/key.png");
  box1Image=loadImage("images/box1.png");
  
  
  
}






function setup() {
  createCanvas(1200,600);
  var wall1  = createSprite(640,530,850,5);
  var wall2  = createSprite(1065,505,5,60);
  var wall3  = createSprite(565,477,1000,5);
  var wall4  = createSprite(68,375,5,200);
  var wall5  = createSprite(35,273,70,5);
  var wall6  = createSprite(6,160,5,230);
  var wall7  = createSprite(600,47,1500,5);
  var wall8  = createSprite(600,90,1000,5);
  var wall9  = createSprite(400,150,5,125);
  var wall10  = createSprite(250,210,300,5);
  var wall11  = createSprite(103,177,5,65);
  var wall12  = createSprite(258,263,5,110);
  var wall13  = createSprite(290,315,65,5);
  var wall14  = createSprite(552,205,5,230);
  var wall15  = createSprite(476,317,150,5);
  var wall16  = createSprite(582,400,600,5);
  var wall17  = createSprite(778,155,5,135);
  var wall18  = createSprite(727,219,100,5);
  var wall19  = createSprite(285,440,5,78);
  var wall20  = createSprite(880,414,5,35);
  var wall21  = createSprite(891,253,5,100);
  var wall22  = createSprite(992,300,200,5);
  var wall23  = createSprite(1090,255,5,95);
  
  
  
  

 
  
 var snake1 = createSprite(25,150,10,10);
  snake1.scale=0.2;
  snake1.addImage("snake1",snake1Image);
  var snake2= createSprite(369,156,10,10);
  snake2.scale=0.2;
  snake2.addImage("snake2",snake2Image);
  var spider1=createSprite(80,233,10,10);
  spider1.scale=0.1;
  spider1.addImage("spider1",spider1Image);
  var spider2=createSprite(228,240,10,10);
  spider2.scale=0.1;
  spider2.addImage("spider2",spider2Image);

  var spider3=createSprite(190,313,10,10);
 spider3.scale=0.1;
  spider3.addImage("spider3",spider3Image);
  
  var sword= createSprite(342,277,10,10);
  sword.scale=0.1;
  sword.addImage("sword",swordImage);
  
  var key1 =createSprite(266,168,10,10);
 key1.scale=0.1;
  key1.addImage("key1",key1Image);
  var key2 =createSprite(164,164,10,10);
  key2.scale=0.1;
  key2.addImage("key2",key2Image);
  var key3 =createSprite(144,274,10,10);
   key3.scale=0.1;
  key3.addImage("key3",key3Image);
  var box1=createSprite(362,79,10,10);
  box1.scale=0.1;
  box11.addImage("box1",box1Image);
}

function draw() {
  background(0);
  text(mouseX  + "  " + mouseY,mouseX,mouseY);   
  drawSprites();
}