showGrid(50);
setSpeed(5); //small is fast
color("blue");
width(5);

function square(size,x,y){
penup();
goto(x,y);
pendown();

forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
}

//add a new function that draws an equilateral triangle
function triangle(size,x,y){
forward(size);
right(60);
forward(size);
right(60);
forward(size);
right(60);
}

function feather(r){
	arc(r,90);
	right(90);
	arc(r,90);
	right(90);
}

color("brown");
feather(75);
left(15);
feather(75);







