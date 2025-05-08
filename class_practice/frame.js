let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// background
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

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

function drawAngel(ctx, x, y, angle) {
   ctx.beginPath();
   ctx.strokeStyle = "rgba(255, 0, 128)";
   ctx.lineWidth = 3;
   ctx.fillStyle = "rgba(255, 255, 128)";
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + 25, y + 20);
   ctx.lineTo(x, y + 10);
   ctx.lineTo(x - 25, y + 20);
   ctx.lineTo(x, y);
   ctx.stroke();
   ctx.fill();
   drawAcircle(ctx, x, y, angle)
}

function drawAcircle(ctx, x, y, radius, startAngle, endAngle) { 
   ctx.beginPath();
   ctx.arc(x + 39, y + 28, 3, 0, 2 * Math.PI);
   ctx.moveTo(x - 39, y + 28);
   ctx.arc(x - 39, y + 28, 3, 0, 2 * Math.PI);
   ctx.moveTo(x, y + 15)
   ctx.arc(x, y + 20, 4, 0, 2 * Math.PI);
   ctx.moveTo(x + 10, y + 22);
   ctx.arc(x + 10, y + 22, 2, 0, 2 * Math.PI);
   ctx.moveTo(x - 10, y + 22);
   ctx.arc(x - 10, y + 22, 2, 0, 2 * Math.PI);
   ctx.stroke();
   ctx.fill();
}
drawDoritoship(ctx, 50, 50);
drawJeremy(ctx, 100, 50);
drawDoritoship(ctx, 150, 50);
drawDoritoship(ctx, 250, 50);
drawDoritoship(ctx, 150, 100);
drawDoritoship(ctx, 100, 100);

drawJeremy(ctx, 200, 100);
drawJeremy(ctx, 300, 100);

drawAngel(ctx, 200, 320);

