var frame_color=""
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(200,300);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,300,300);
    tint(tint_color);
    stroke(frame_color);
    fill(frame_color);
    rect(0, 0, 20, 300);
    rect(280, 0, 20, 300);
    rect(0, 0, 300, 20);
    rect(0, 280, 300, 20);
    circle(30, 30, 60);
    circle(270, 30, 60);
    circle(30, 270, 60);
    circle(270, 270, 60);
}
function filter123(){
    tint_color=document.getElementById("tint1").value;
    frame_color=document.getElementById("color1").value;
    console.log(frame_color);
}
function take_snapshot(){
    save("ayaan.png");
}