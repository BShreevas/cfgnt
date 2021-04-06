class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      horse=createSprite(100,200);
      horse.addAnimation("horse",horseGif);
      horse.scale=0.5;
      deer=createSprite(500,200);
      deer.addAnimation("deer",deerGif);
      deer.scale=0.5;
      dino=createSprite(900,200);
      dino.addAnimation("dino",dinoGif);
      dino.scale=0.5;
      lion=createSprite(1300,200);
      lion.addAnimation("lion",lionGif);
      lion.scale=0.5;
      animals=[horse,deer,dino,lion];
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      var index=0;
      var x=0,y;
      var display_position = 130;
      for(var plr in allPlayers){
        index=index+1
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        animals[index-1].x=x;
       animals[index-1].y=y;
        if(index===player.index){
          animals[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=animals[index-1].y;
        }
      //  if (plr === "player" + player.index)
      //    fill("red")
      //  else
      //    fill("black");

      //  display_position+=20;
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }


    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3860){
      gameState=2
    }
    drawSprites();
  }
    end(){
      console.log("game ended");
    }
    drawSprites();
  }
  

