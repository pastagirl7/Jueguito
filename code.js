var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;
var playerMallet2;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var gameState = "serve";

var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var playerMallet2 = createSprite(200,350,50,10);
playerMallet2.shapeColor = "black";

var player1Score=0;
var player2Score=0;

function draw() {
  background("skyblue");
  
  if(gameState=="serve")
  {
      textSize(18);
      fill ("purple");
      text("Presiona espacio para empezar", 73, 188);
      textSize(15);
      fill("BLACK");
      text("Jugador 1 se mueve con flechas", 20, 110);
      text("(ARRIBA,ABAJO,IZQUIERDA Y DERECHA)", 18, 128);
      text("Jugador 2 se mueve con (A,D,W,S)", 20, 270);
      
      if (keyDown("space")) {
        serve();
        gameState="play";
      }
      
     
  }
  
  fill("black");
textSize(17);
text("Jugador 1: "+player1Score, 20, 160);
fill("black");
textSize(17);
text("Jugador 2: "+player2Score, 20, 240);
  
  
  if(striker.isTouching(goal1))
      { 
        player2Score = player2Score+1 ;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
  if(striker.isTouching(goal2))
      {
        player1Score =  player1Score + 1;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
  if(player1Score == 5 || player2Score == 5)
  
      {
        fill("black");
        textSize(18);
        text("Fin del juego",155,160);
      }
  if (player1Score == 5) {
    fill("yellow");
    textSize(17);
    text("Jugador 1 gana", 140, 100);
  }
  if (player2Score == 5) {
    fill("yellow");
    textSize(17);
    text("Jugador 2 gana", 140, 300);
  }
  if (player1Score == 5 || player2Score == 5) {
    striker.destroy();
  }
 
 
  
  paddleMovement();
  paddleMovement2();
  
  

  
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(playerMallet2);
  playerMallet.bounceOff(edges);
  playerMallet2.bounceOff(edges);

  
  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();
}



























function serve() {
  striker.velocityX = 7;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}
function paddleMovement2()
{
  if(keyDown("a")){
    playerMallet2.x = playerMallet2.x-10;
    
  }
  
  if(keyDown("d")){
    playerMallet2.x = playerMallet2.x+10;
    
  }
  
  if(keyDown("w")){
   if(playerMallet2.y>280)
   {
    playerMallet2.y = playerMallet2.y- 10;
   }
  }
  
  if(keyDown("s")){
    if(playerMallet2.y<375)
   {
    playerMallet2.y = playerMallet2.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
