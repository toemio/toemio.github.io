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
};

const keys = {};



function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 0, 128)";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function drawPlayer(){
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

function movePlayer(){
//	if(keys['ArrowDown']){
//		player.y += player.speed;
//	}
//	if(keys['ArrowUp']){
//		player.y -= player.speed;
//	}
	if(keys['ArrowRight'] && player.x < 400){
		player.x += player.speed;
	}
	if(keys['ArrowLeft'] && player.x > 50){
		player.x -= player.speed;
	}
	if(player.y < 0){
		player.y = 400;
	}
	if(player.y > 400){
		player.y = 0;
	}

}

//function drawScore(){
//	ctx.font = "10px Arial";
//	ctx.fillText(score, 10,10);
	
//}


function animate() {
//	score++;
	drawRect(x - 50, y - 50);
//	drawScore();
	drawPlayer();
	movePlayer();
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
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (w) => {
	keys[w.key] = false;
});


animate();
