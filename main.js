function preload(){

}
function setup(){
canvas= createCanvas(500,400);
canvas.position(550,300);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,150,100,200,200);
fill(247, 49, 49);
stroke(247, 49, 175);
circle(50,50,80);
circle(450,50,80);
circle(50,350,80);
circle(450,350,80);
fill(30, 133, 32);
stroke(247, 49, 175);
rect(90, 20, 320, 55);
rect(90, 320, 320, 55);
rect(20, 80, 55, 230);
rect(420, 80, 55, 230);
}
function take_snapshot(){
    save("pic1.png");
}