const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let gameRunning = true;

const angel = {
    x : 0,
    y : 0,
    speed: 3,
};

const keys = {};

function drawAngel(ctx, x, y, angle){
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 0, 128)";
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgba(255, 255, 128)";
    ctx.beginPath();
    ctx.moveTo(angel.x, angel.y);
    ctx.lineTo(angel.x + 25, angel.y + 20);
    ctx.lineTo(angel.x, angel.y + 10);
    ctx.lineTo(angel.x - 25, angel.y + 20);
    ctx.lineTo(angel.x, angel.y);
    ctx.stroke();
    ctx.fill();
}


function moveAngel(){
	if(keys['ArrowDown']){
		angel.y += angel.speed;
	}
	if(keys['ArrowUp']){
		angel.y -= angel.speed;
	}
	if(keys['ArrowRight'] && angel.x < 400){
		angel.x += angel.speed;
	}
	if(keys['ArrowLeft'] && player.x > 50){
		angel.x -= angel.speed;
	}
	if(angel.y < 0){
		angel.y = 400;
	}
	if(angel.y > 400){
		angel.y = 0;
	}

}
function game() {
    drawAngel();
    moveAngel();
}

game();