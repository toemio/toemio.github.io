const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
//let dx = 5;
let y = 0;
//let dy =1; 
//let score = 0;
let gameRunning = true;

const player = {
	x : 200,
	y : 320,
	speed: 5
}

const keys = {};

function drawDoritoship(ctx, x, y, angle) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(64, 128, 128)";
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgba(0, 255, 128)";
    ctx.beginPath();    
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y + 40);
    ctx.lineTo(x + 3.25, y + 29.7);
    ctx.lineTo(x, y + 32.95);
    ctx.lineTo(x - 3.25, y + 29.7);
    ctx.lineTo(x - 15, y + 40);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();
    drawDspurple(ctx, x, y, angle);
}



function drawDspurple(ctx, x, y, angle) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 255)";
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgba(255 0 255)";
    ctx.beginPath();
    ctx.moveTo(x, y + 5);
    ctx.lineTo(x + 3, y + 25.2);
    ctx.lineTo(x, y + 28.45);
    ctx.lineTo(x - 3, y + 25.2);
    ctx.lineTo(x, y + 5);
    ctx.moveTo(x - 3.25, y + 36);
    ctx.lineTo(x - 6, y + 46);
    ctx.lineTo(x - 11, y + 44);
    ctx.moveTo(x + 3.25, y + 36);
    ctx.lineTo(x + 6, y + 46);
    ctx.lineTo(x + 11, y + 44);
    ctx.stroke();
    ctx.fill();
}

function drawJeremy(ctx, x, y, angle) {
   ctx.beginPath();
   ctx.strokeStyle = "rgba(64, 128, 128)";
   ctx.lineWidth = 3;
   ctx.fillStyle = "rgba(0, 255, 128)";
   ctx.beginPath();
   y = y + 10;
   ctx.moveTo(x, y + 2);
   ctx.lineTo(x + 16, y + 16);
//   ctx.lineTo(x + 5, y + 17);
//   ctx.lineTo(x + 5, y + 10);
   ctx.lineTo(x, y + 8);
//   ctx.lineTo(x - 5, y + 10);
//   ctx.lineTo(x - 5, y + 17);
//   ctx.lineTo(x - 13, y + 14);
   ctx.lineTo(x - 16, y + 16);
   ctx.lineTo(x, y + 2);
   ctx.stroke();
   ctx.fill();
   drawJpurple(ctx, x, y, angle);
}

function drawJpurple(ctx, x, y, angle) {
   ctx.beginPath();
   ctx.strokeStyle = "rgba(0, 0, 255)";
   ctx.lineWidth = 1;
   ctx.fillStyle = "rgba(255, 0, 255)";
   ctx.beginPath();
   y = y + 10;
   ctx.moveTo(x + 9, y + 2);
   ctx.lineTo(x + 14, y + 6);
   ctx.lineTo(x + 10, y + 9);
   ctx.moveTo(x - 9, y + 2);
   ctx.lineTo(x - 14, y + 6);
   ctx.lineTo(x - 10, y + 9);
   ctx.moveTo(x, y + 1);
   ctx.lineTo(x + 7, y + 5);
   ctx.lineTo(x + 7, y + 9);
   ctx.lineTo(x, y + 12);
   ctx.lineTo(x - 7, y + 9);
   ctx.lineTo(x - 7, y + 5);
   ctx.lineTo(x, y + 1);
   ctx.stroke();
   ctx.fill();
}

function drawEnemies(ctx, x, y, angle) {
	drawDoritoship(ctx, 50, 50);
	drawJeremy(ctx, 100, 50);
	drawDoritoship(ctx, 150, 50);
	drawDoritoship(ctx, 250, 50);
	drawDoritoship(ctx, 150, 100);
	drawDoritoship(ctx, 100, 100);
	drawJeremy(ctx, 200, 100);
	drawJeremy(ctx, 300, 100);
}

function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 0, 128)";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function drawPlayer() {
	ctx.beginPath();
	ctx.strokeStyle = "rgba(255, 0, 128)";
	ctx.lineWidth = 3;
	ctx.fillStyle = "rgba(255, 255, 128)";
	ctx.beginPath();
	ctx.moveTo(player.x, player.y);
	ctx.lineTo(player.x + 25, player.y + 20);
	ctx.lineTo(player.x, player.y + 10);
	ctx.lineTo(player.x - 25, player.y + 20);
	ctx.lineTo(player.x, player.y);
	ctx.stroke();
	ctx.fill();
	ctx.shadowColor = "#FF8";
	ctx.shadowBlur = 10;
	drawCircles();
}

function drawCircles() {
	ctx.beginPath();
	ctx.arc(player.x + 39, player.y + 28, 3, 0, 2 * Math.PI);
    ctx.moveTo(player.x - 39, player.y + 28);
    ctx.arc(player.x - 39, player.y + 28, 3, 0, 2 * Math.PI);
    ctx.moveTo(player.x, player.y + 15)
    ctx.arc(player.x, player.y + 20, 4, 0, 2 * Math.PI);
    ctx.moveTo(player.x + 10, player.y + 22);
    ctx.arc(player.x + 10, player.y + 22, 2, 0, 2 * Math.PI);
    ctx.moveTo(player.x - 10, player.y + 22);
    ctx.arc(player.x - 10, player.y + 22, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//function drawBullet() {
//	ctx.beginPath();
//	ctx.strokeStyle = "white";
//	ctx.beginPath();
//	ctx.moveTo(player.x, player.y - 10);
//	ctx.lineTo(player.x, player.y - 15);
//	ctx.stroke();
//}

//function shootBullet() {
//	const speed = 5;
//	const delay = 7;
//	const damage = 1;
//	const bulletX = player.x;
//	const bulletY = player.y;
//	bulletController.shoot(bulletX,bulletY,speed,damage,delay);
//	y = y + 1;
//}

function movePlayer() {
//	if(keys['ArrowDown']){
//		player.y += player.speed;
//	}
//	if(keys['ArrowUp']){
//		player.y -= player.speed;
//	}
	if(keys['ArrowRight'] && player.x < 400){
		player.x += player.speed;
	}
	if(keys['d'] && player.x < 400){
		player.x += player.speed;
	}
	if(keys['ArrowLeft'] && player.x > 0){
		player.x -= player.speed;
	}
	if(keys['a'] && player.x > 0){
		player.x -= player.speed;
	}
//	if(keys[' ']){
//		shootBullet();
//	}

}

function animate() {
//	score++;
	drawRect(x - 50, y - 50);
//	drawScore();
	drawPlayer();
	movePlayer();
	drawEnemies();
	drawJeremys();
//	shootBullet();
//    x = x + dx;
//    y = y + dy;

//    if(x > 350){
//        dx = dx * -1;
//    }
//    if(x < 0){
//        dx = dx * -1;
//    }

//    if(y > 350){
//        dy = dy * -1;
//    }
//    if(y < 0){
//        dy = dy * -1;
//    }
    requestAnimationFrame(animate);
}

function handleKeyPress(w){
	keys[w.key] = true;
	console.log(w.key);
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (w) => {
	keys[w.key] = false;
});


animate();
