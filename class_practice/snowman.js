let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// background
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar(ctx, x, y, angle) {
	ctx.beginPath();
	ctx.fillStyle = "#EFEEFF";
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y + 10);
	ctx.lineTo(x + 2, y + 2);
	ctx.lineTo(x + 10, y);
	ctx.lineTo(x + 2, y - 2);
	ctx.lineTo(x, y - 10);
	ctx.lineTo(x - 2, y - 2);
	ctx.lineTo(x - 10, y);
	ctx.lineTo(x - 2, y + 2);
	ctx.lineTo(x, y + 10);
	ctx.stroke();
	ctx.fill();
}

function drawSmall(ctx, x, y, angle) {
	ctx.beginPath();
	ctx.strokeStyle = "#EEEEFF";
	ctx.fillStyle = "#EEEEFF";
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y + 5);
	ctx.lineTo(x + 1, y + 1);
	ctx.lineTo(x + 5, y);
	ctx.lineTo(x + 1, y - 1);
	ctx.lineTo(x, y - 5);
	ctx.lineTo(x - 1, y - 1);
	ctx.lineTo(x - 5, y);
	ctx.lineTo(x - 1, y + 1);
	ctx.lineTo(x, y + 5);
	ctx.stroke();
	ctx.fill;
}

// stamping star

drawStar(ctx, 100, 200);
drawStar(ctx, 200, 300);
drawStar(ctx, 350, 370);
drawStar(ctx, 50, 234);
drawStar(ctx, 210, 70);
drawStar(ctx, 270, 40);
drawStar(ctx, 30, 40);

drawSmall(ctx, 352, 200);
drawSmall(ctx, 100, 352);
drawSmall(ctx, 80, 80);
drawSmall(ctx, 200, 210);
drawSmall(ctx, 220, 225);
