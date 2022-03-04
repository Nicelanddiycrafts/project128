song= "";
lwx = 0;
lwy = 0;
rwy = 0;
rwx = 0;


function preload(){
song = loadSound("encanto1.mp3");
}

function setup(){
canvas = createCanvas(450,300);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses); 

song.play();    

}


function draw(){
    image(video,0,0,450,300);
    }
    
    function modelLoaded(){
        console.log("model is loaded");
        }
        
        function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            lwx = results[0].pose.leftWrist.x;
            lwy = results[0].pose.leftWrist.y;
        
            rwx = results[0].pose.rightWrist.x;
            rwy = results[0].pose.rightWrist.y;
        
        }
        }