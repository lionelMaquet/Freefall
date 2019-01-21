let canvasWidth = window.innerWidth - 100; // default 1700
let canvasHeight = window.innerHeight - 100; // default 800
let backgroundColor = 0; // default 0
let scorePosition = [50,100]; // default [50,100]
let referenceCircleRadius = 300; // default 300
let sizeOfScore = 60; // default 60

let framesBetweenObstacles = 85; // Lower = harder // default 100
let defaultObstacleWholeSize = 22; // Lower = harder // default 15
let defaultObstacleGrowRate = 4.5; // Higher = harder // default 4
let sizeWhenRemoved = 2000; // default 2000

let playerCircleStartAngle = 90; // 0 = right, 180 = left // default 90
let playerCircleRadius = 8; // default 15
let playerSpeed = 2.3;  // default 2

let sizeOfEndTitle = 150; // default 150
let endGameText = 'GAME OVER'; // default 'GAME OVER'
let endGameTitlePosition = [canvasWidth/4 , canvasHeight/2]; // default [canvasWidth/4, canvasHeight/2]

let soundOn = true;
































function loadEasyVariables() {
    canvasWidth = 1700; // default 1700
    canvasHeight = 800; // default 800
    backgroundColor = 0; // default 0
    scorePosition = [50,100]; // default [50,100]
    referenceCircleRadius = 300; // default 300
    sizeOfScore = 60; // default 60

    framesBetweenObstacles = 150; // Lower = harder // default 100
    defaultObstacleWholeSize = 30; // Lower = harder // default 15
    defaultObstacleGrowRate = 3; // Higher = harder // default 4
    sizeWhenRemoved = 2000; // default 2000

    playerCircleStartAngle = 90; // 0 = right, 180 = left // default 90
    playerCircleRadius = 15; // default 8
    playerSpeed = 2.2;  // default 2

    sizeOfEndTitle = 150; // default 150
    endGameText = 'GAME OVER'; // default 'GAME OVER'
    endGameTitlePosition = [canvasWidth/4 , canvasHeight/2]; // default [canvasWidth/4, canvasHeight/2]

}

function loadNormalVariables() {
    canvasWidth = 1700; // default 1700
    canvasHeight = 800; // default 800
    backgroundColor = 0; // default 0
    scorePosition = [50,100]; // default [50,100]
    referenceCircleRadius = 300; // default 300
    sizeOfScore = 60; // default 60

    framesBetweenObstacles = 85; // Lower = harder // default 100
    defaultObstacleWholeSize = 15; // Lower = harder // default 15
    defaultObstacleGrowRate = 4; // Higher = harder // default 4
    sizeWhenRemoved = 2000; // default 2000

    playerCircleStartAngle = 90; // 0 = right, 180 = left // default 90
    playerCircleRadius = 15; // default 15
    playerSpeed = 2.2;  // default 2

    sizeOfEndTitle = 150; // default 150
    endGameText = 'GAME OVER'; // default 'GAME OVER'
    endGameTitlePosition = [canvasWidth/4 , canvasHeight/2]; // default [canvasWidth/4, canvasHeight/2]
}

function loadHardVariables() {
    canvasWidth = 1700; // default 1700
    canvasHeight = 800; // default 800
    backgroundColor = 0; // default 0
    scorePosition = [50,100]; // default [50,100]
    referenceCircleRadius = 300; // default 300
    sizeOfScore = 60; // default 60

    framesBetweenObstacles = 65; // Lower = harder // default 100
    defaultObstacleWholeSize = 20; // Lower = harder // default 15
    defaultObstacleGrowRate = 6; // Higher = harder // default 4
    sizeWhenRemoved = 2000; // default 2000

    playerCircleStartAngle = 90; // 0 = right, 180 = left // default 90
    playerCircleRadius = 1; // default 15
    playerSpeed = 3;  // default 2

    sizeOfEndTitle = 150; // default 150
    endGameText = 'GAME OVER'; // default 'GAME OVER'
    endGameTitlePosition = [canvasWidth/4 , canvasHeight/2]; // default [canvasWidth/4, canvasHeight/2]
}





/*
let canvasWidth = 1700; // default 1700
let canvasHeight = 800; // default 800
let backgroundColor = 0; // default 0
let scorePosition = [50,100]; // default [50,100]
let referenceCircleRadius = 300; // default 300
let sizeOfScore = 60; // default 60

let framesBetweenObstacles = 100; // Lower = harder // default 100
let defaultObstacleWholeSize = 15; // Lower = harder // default 15
let defaultObstacleGrowRate = 4; // Higher = harder // default 4
let sizeWhenRemoved = 2000; // default 2000

let playerCircleStartAngle = 90; // 0 = right, 180 = left // default 90
let playerCircleRadius = 15; // default 15
let playerSpeed = 2;  // default 2

let sizeOfEndTitle = 150; // default 150
let endGameText = 'GAME OVER'; // default 'GAME OVER'
let endGameTitlePosition = [canvasWidth/4 , canvasHeight/2]; // default [canvasWidth/4, canvasHeight/2]
*/