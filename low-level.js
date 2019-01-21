
class obstacle {

    constructor(wholeAngle) {
        this.wholeAngle = wholeAngle,
        this.centerX = referenceCircle.centerX,
        this.centerY = referenceCircle.centerY,
        this.size = 0,
        this.startAngle = (Math.random()*360),
        this.endAngle = (this.startAngle + (360 - wholeAngle)) % 360,
        this.passed = false;
        this.color = [255,255,255];
        
    }

    display() {
        stroke(this.color[0], this.color[1], this.color[2]);
        arc(this.centerX,this.centerY,this.size,this.size,this.startAngle,this.endAngle);
    }

    grow() {
        this.size += defaultObstacleGrowRate;
    }

}


function playerControls() {

    if (keyIsDown(LEFT_ARROW)) {
        playerCircle.move('left');
    } else if (keyIsDown(RIGHT_ARROW)) {
        playerCircle.move('right');
    }

}

function generateObstacles(){
    if (timer % framesBetweenObstacles == 0 || timer == 1) {
        arrayOfObstacles.unshift(new obstacle(defaultObstacleWholeSize));
    }
}


function displayAndGrowObstacles(){
    for (let i = 0; i < arrayOfObstacles.length; i++){
        arrayOfObstacles[i].display();
        arrayOfObstacles[i].grow();
    }
}

function removeObstacles(){
    for (let i = 0 ; i < arrayOfObstacles.length; i++) {
        if (arrayOfObstacles[i].size > sizeWhenRemoved ) {
            arrayOfObstacles.pop()
        }
    }
}


let referenceCircle = {
    centerX : canvasWidth/2,
    centerY : canvasHeight/2,
    radius: referenceCircleRadius,
    display() {
        ellipse(referenceCircle.centerX, referenceCircle.centerY, referenceCircle.radius*2, referenceCircle.radius*2);
    },
}


let playerCircle = {

    angle: playerCircleStartAngle,
    radius: playerCircleRadius,

    calculateX() {
        return referenceCircle.centerX + cos(playerCircle.angle) * referenceCircle.radius;
    },

    calculateY() {
        return referenceCircle.centerY + sin(playerCircle.angle) * referenceCircle.radius;
    },

    display() {
        stroke(255);
        ellipse(playerCircle.calculateX(), playerCircle.calculateY(), playerCircle.radius*2);
    },

    move(leftOrRight) {
        if (leftOrRight == 'left') {
            playerCircle.angle+= playerSpeed;
        } else if (leftOrRight == 'right') {
            playerCircle.angle-= playerSpeed;
        }
    }

}

function obstacleIsInRange(obstacle){
    if (obstacle.size > (referenceCircle.radius*2 - playerCircle.radius) &&
        obstacle.size < (referenceCircle.radius*2 + playerCircle.radius) ) {
        return true;
    } else {
        return false;
    }
}

function playerIsInHole(obstacle) {

    let playerAngle = Math.abs(360 + (playerCircle.angle % 360)) % 360 ;

    if ( (playerAngle > obstacle.endAngle &&
          playerAngle < obstacle.endAngle + obstacle.wholeAngle) || 
          //counted as hit when obstacle was for example between 352 and 372 while player was at 4 
          (playerAngle < obstacle.startAngle && 
          playerAngle > obstacle.startAngle - obstacle.wholeAngle)) {

            return true;

        } else {
            return false;
        }
}

function randomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return [red,green,blue];
}


function detectHit() {

    for (let obstacleIndex = 0; obstacleIndex < arrayOfObstacles.length; obstacleIndex++) {

        let currObs = arrayOfObstacles[obstacleIndex];
        
        if (obstacleIsInRange(currObs)) {
            
               if (playerIsInHole(currObs)) {

                    if (currObs.passed == false) {
                        currObs.passed = true;
                        currObs.color = randomColor();

                        if (soundOn == true) {
                            mySound.play()
                        }
                        
                        score++;
                    }

                    return false

                } else {

                    if (currObs.passed == false) {
                        return true
                    }  

                }
                
        }

    }

}

function displayScore(){
    textSize(sizeOfScore);
    text(score,scorePosition[0],scorePosition[1]);
}

function endGame() {
    noLoop()
    background(0);
    textSize(canvasWidth/15)
    text(endGameText, (canvasWidth/3) , canvasHeight/2)
    textSize(canvasWidth/50)
    text('Press Enter to restart',(canvasWidth/2)-70, endGameTitlePosition[1] + 100 )
    // press enter to restart function is active

}

function keyPressed() {
    if(keyCode == ENTER) {
        resetGame();
        loop();
    }
}



function resetGame() {
    timer = 0;
    score = 0;
    arrayOfObstacles = [];
}

