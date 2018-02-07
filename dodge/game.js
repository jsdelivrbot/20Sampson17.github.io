var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var score;
var level;


function preload() {
   playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
   enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
   backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    isGameOver = false;
    score = 0;
    level = 1;
    createCanvas(256, 256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy.overlap(player)) {
            gameOver();
        }
    
    background(backgroundImage);
    
    textAlign(CENTER);
    fill("white");
    text("Score: ", width/10, height/10);
    text(score, width/15, height/6);
    
    text("Level: ", 9*width/10, height/10);
    text(level, 13*width/15, height/6);
    
    drawSprites();
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))) {
        player.position.x = player.position.x + 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
        player.position.x = player.position.x - 2;
    }
    
    enemy.position.y = enemy.position.y + level;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5)
        score += 1
    }
    
    if (score >= 0 && score <= 10 ) {
        level = 1
    } else {
        if (score > 10 && score <= 20) {
            level = 2
        } else {
            if (score > 20 && score <= 30) {
                level = 3
            } else {
                level = 4
            }
            }
        }
    }
    }

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    score = 0
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}