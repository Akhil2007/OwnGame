//Player
var egg , eggImg
//Obsticles
var rock1 , rock2 , rock3 , branch1 , branch2 , branch3
var rock1Img , rock2Img , rock3Img , branch1Img , branch2Img , branch3Img
//background
var background , backgroundImg
//Score
var gameState


function preload() {
    //Player
    eggImg = loadImage("Img/Egg.jpg");
        //Branches
    branch1Img = loadImage("Img/Branch1.png");
    branch2Img = loadImage("Img/Branch2.jpg");
    branch13mg = loadImage("Img/Branch3.jpg");
        //Background
    backgroundImg = loadImage("Img/Mountain(Background).jpg");
    //Rocks
    rock1Img = loadImage("Img/Rock1.jpg");
    rock2Img = loadImage("Img/Rock2.jpg");
    rock3Img = loadImage("Img/Rock3.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    //Player
    egg = createSprite(100,200,40,40);
    egg.addImage("Player" , eggImg);
    egg.scale = 0.5;
    //Background

   


   
}

function draw(){
    background(backgroundImg);

    drawSprites();

}


