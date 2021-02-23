// namespaces

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,body;

function setup()
{
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  var option= { restitution : 1  }
  body=Bodies.rectangle(240,200,50,50,option);
  World.add(world,body);

  var goption= { isStatic : true }
  ground=Bodies.rectangle(200,390,200,20,goption);
  World.add(world,ground);

  var coption= { restitution : 1  }
   cbody=Bodies.circle(200,100,20,coption);
  World.add(world,cbody);
}

function draw()
{
 background("gold");
 Engine.update(engine);
 rectMode(CENTER);
 rect(body.position.x,body.position.y,50,50);   

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);  

ellipseMode(RADIUS);
ellipse(cbody.position.x,cbody.position.y,20,20);
}