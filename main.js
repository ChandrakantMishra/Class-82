color="black";
width_of_the_line=2;
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var current_position_of_x,current_position_of_y;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        
        console.log("last_position_of_x,last_position_of_y = ");
        console.log("x = " + last_position_of_x+" , Y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current_position_of_x,current_position_of_y = ");
        console.log("x = " + current_position_of_x+" , Y= "+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    }

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

}

