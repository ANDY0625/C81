canvas=document.getElementById("MyCanvas");
spx=canvas.getContext("2d");
color="red";
spx.beginPath();
spx.strokeStyle=color;
spx.lineWidth=2;
spx.arc(200,200,30,0,2*Math.PI);
spx.stroke();
canvas.addEventListener("mousedown",mymouse);
function mymouse(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    Circle(mousex,mousey);
}
function Circle(mousex,mousey){
    spx.beginPath();
    spx.strokeStyle=color;
    spx.lineWidth=2;
    spx.arc(mousex,mousey,30,0,2*Math.PI);
    spx.stroke();
}