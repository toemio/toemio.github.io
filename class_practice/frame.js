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
    ctx.lineTo(x - 16.75, y - 10.3);
    ctx.lineTo(x - 3.25, y - 3.25);
    ctx.lineTo(x - 3.25, y + 3.25);
    ctx.lineTo(x - 16.75, y + 10.3);
    ctx.lineTo(x + 15, y - 40);
    ctx.stroke();
    ctx.fill();
}

//    ctx.strokeStyle = "rgba(0 0 255)";
//    ctx.lineWidth = 2;
//    ctx.fillStyle = "rgba(255 0 255)";
//    ctx.beginPath();
//    ctx.moveTo = "x, y + 3.25";
//    ctx.lineTo = "x + 3, y + 18.95";
//    ctx.lineTo = "x - 3, y + 3.25";
//    ctx.lineTo = "x - 3, y - 3.25";
//    ctx.lineTo = "x + 3, y - 18.95";
//    ctx.stroke();
//    ctx.fill;

//}

drawDoritoship(ctx, 100, 100);
