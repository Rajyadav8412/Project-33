const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divHeight=300;
var ground2;
var score=0;
var particle1;
var count=0;
var gamestate="start";




function setup() {
  createCanvas(480,550);


  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  

  for(k=0; k<=width; k=k+80){
    divisions.push(new division(k,height-divHeight/2,10,divHeight));
}

  for(j=0; j<=width; j=j+50){
    plinkos.push(new plinko(j,50,10))
  }

  for(j=15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,100,10))
  }

  for(j=45; j<=width-5; j=j+50){
  plinkos.push(new plinko(j,150,10))
  }

  for(j=5; j<=width-20; j=j+50){
    plinkos.push(new plinko(j,200,10));
  }
   
  particle1=new particle(mouseX,10,10,10);
  
  ground2=new Ground(300,540,600,20);
  
}

function draw() {
  background(0);  
  
  textSize(20);
  fill("blue");
  text("Score:" + score,40,30);
  text("200",20,300);
  text("200",100,300);
  text("500",180,300);
  text("500",260,300);
  text("100",340,300);
  text("100",420,300);





  
 
 

  
  for(j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  

  for(var k=0; k< divisions.length; k++){
    divisions[k].display();
  }



  if(particle1!==null){

    particle1.display();

    if(particle1.body.position.y>520){
      
       if(particle1.body.position.x>0 && particle1.body.position.x<120){
         score=score+200;
         particle1=null;
         if(count>=5){
          gamestate="end";
        }
        
        
       }
       else if(particle1.body.position.x>120 && particle1.body.position.x<300){
         score=score+500;
         particle1=null;
         if(count>=5){
          gamestate="end";
         }
        
       }
       else if(particle1.body.position.x>300 && particle1.body.position.x<480){
         score=score+100;
         particle1=null;
         if(count>=5){
          gamestate="end";
         }
        
       }

    }
  }
  
  
  
  if(gamestate==="end"){
    textSize(60)
    fill("blue");
    text("GAMEOVER",80,200);

  }

  //particle1.display();
  
  ground2.display();

  Engine.update(engine);
}



function mousePressed(){
  if(gamestate!=="end"){
    particle1=new particle(mouseX,10,10,10);
    count=count+1;
  }
}





