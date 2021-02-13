var canva;
var gState,cCount, database, quiz,question, contestant;
var gState=0;
var allContestants;
var bg_image,bg;

function preload(){
  bg_image=loadImage("bgg.png");
  bg=loadImage("bgresult.png")
}
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg_image);

  if(cCount===4){
    quiz.update(1);
  }

  if(gState===1){
    clear();
    quiz.play();
  }
  
}
