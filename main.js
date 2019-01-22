let arrayOfObstacles = [];
let timer = 0;
let score = 0;


// HANDLERS

function obstacleHandler(){
    generateObstacles();
    displayAndGrowObstacles();
    removeObstacles();
}


function playerHandler(){
    playerCircle.display();
    playerControls();
}

function collisionHandler() {
    if (detectHit() == true) {
        endGame();
    }
}

function playGame() {
    timer++;
    background(0);
    playerHandler();
    obstacleHandler();
    collisionHandler();
    displayScore();
}


/*****************/

function preload(){
    mySound = new Howl({
  src: ['sound.mp3']
});
}

p5.disableFriendlyErrors = true;

function setup() {
    angleMode(DEGREES);
    createCanvas(canvasWidth,canvasHeight);
    background(backgroundColor);
    noFill();
    stroke(255);
    //loadHardVariables()
}

function draw() {

    playGame()
    if (frameRate() < 30){
      console.log('too slow')
    }


}
