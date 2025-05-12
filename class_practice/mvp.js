const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let dx = 5;
let y = 0;
let dy =1; 
let score = 0;
let gameRunning = true;

const player = {
	x : 0,
	y : 0,
	color: '#EFE8FF',
	speed: 3
};

const keys = {};



function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function drawPlayer(){
	ctx.fillStyle = player.color;
	ctx.beginPath();
	ctx.arc(
		player.x,
		player.y,
		20,
		0,
		2*Math.PI
	);
	ctx.fill();
}

function movePlayer(){
	if(keys['ArrowDown']){
		player.y += player.speed;
	}
	if(keys['ArrowUp']){
		player.y -= player.speed;
	}
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

function drawScore(){
	ctx.font = "10px Arial";
	ctx.fillText(score, 10,10);
	
}


function animate() {
	score++;
	drawRect(x,y);
	drawScore();
	drawPlayer();
	movePlayer();
    x = x + dx;
    y = y + dy;

    if(x > 350){
        dx = dx * -1;
    }
    if(x < 0){
        dx = dx * -1;
    }

    if(y > 350){
        dy = dy * -1;
    }
    if(y < 0){
        dy = dy * -1;
    }
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
