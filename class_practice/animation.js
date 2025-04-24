const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let dx = 5;
let y = 0;
let dy =1; 


//this is an object
//we access values in an object like this:
//player.x


const player = {
	//key:value pair
	x : 0,
	y : 0,
	color: '#EFE8FF',
	speed: 3
};

//this is also an object. we access values from this ,ind of object
//like this:
// keys['ArrowUp']
const keys = {};



//define functions
function drawRect(x,y) {
    //console.log("drawing rect");
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
	//player.x = player.x + player.speed;
	//player.x += player.speed;
	if(keys['ArrowDown']){
		player.y += player.speed;
	}
	if(keys['ArrowUp']){
		player.y -= player.speed;
	}
	if(keys['ArrowRight']){
		player.x += player.speed;
	}
	if(keys['ArrowLeft']){
		player.x -= player.speed;
	}
}


function animate() {
    drawRect(x,y);
	drawPlayer();
	movePlayer();
    // TODO: Add some code here 
    //  that will change the rectangle's position
    x = x + dx;
    y = y + dy;

    //if the box goes off the right side of the screen
    //reset it to the inital position
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
    //console.log(w.key);
	keys[w.key] = true;
}

//2 inputs: what type of event, a function to call
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (w) => {
	//console.log(w.key + " up");
	keys[w.key] = false;
});



//call our function
animate();
