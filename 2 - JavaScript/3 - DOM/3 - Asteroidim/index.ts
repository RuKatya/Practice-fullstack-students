const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth; //get width of page
const height = canvas.height = window.innerHeight; //get height of page


function random(min, max) { //get random number
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Ball(x, y, velX, velY, color, size) { //startX, startY, directionX, directionY, color, size 
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath(); //from where starting
    ctx.fillStyle = this.color; //whichi color to see
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //create ball 
    ctx.fill(); // fill the ball
}

// const testBall = new Ball(50, 100, 4, 4, 'blue', 10);

// testBall.x
// testBall.size
// testBall.color
// testBall.draw()

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) { //if x + sizr bigger than width then directionX decreases (-)
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) { //if x - size less than zero then directionX decreases (-)
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {//if x + size bigger than width then directionY decreases (-)
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {//if x - size less than zero then directionY decreases (-)
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

const balls = [];

Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].velY = this.velX + 5
                balls[j].update();
            }
        }
    }
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //background black
    ctx.fillRect(0, 0, width, height); //

    while (balls.length < 6) {
        var ball = new Ball( //startX, startY, directionX, directionY, color, size 
            random(0, width),
            random(0, height),
            random(0, 7),
            random(0, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')', //color
            random(10, 20)
        );

        // setInterval(() => {
        //     console.log(ball)
        // }, 1000)
        balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
