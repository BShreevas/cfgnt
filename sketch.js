var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var animals;
var horse,deer,dino,lion;
var horseGif,deerGif,dinoGif,lionGif;
var form, player, game;

function preload(){
  horseGif=loadAnimation("Animated horse GIF.gif");
  deerGif=loadAnimation("ma drawings.gif");
  dinoGif=loadAnimation("SFit.gif");
  lionGif=loadAnimation("(Animated) Simba runcycle.gif");
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
