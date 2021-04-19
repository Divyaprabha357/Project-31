var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(640, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k+10, height-divisionHeight/3, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }

  //create 2nd row of plinko objects
  for (var j = 30; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,100));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150));
  }
  
   //create 4rd row of plinko objects
   for (var j = 30; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,200));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);

  if(frameCount%60==0){
    Particle = new particle(random(120, 500), 0);
    particles.push(Particle);
    
  }


  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

}


