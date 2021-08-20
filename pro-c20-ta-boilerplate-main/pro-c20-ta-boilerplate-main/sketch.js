
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ground;
let ball;
let right;
let left;
let up;

var button1;
var button2;


function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1 = createImg("right.png");
  button1.position(220, 30);
  button1.size(50,50);
  button2 = createImg("up.png");
  button2.position(20, 30);
  button2.size(50,50);
  button1.mouseClicked(hForce);
  button2.mouseClicked(yForce);


  var ballOptions = {
    restitution:0.8,
    frictionAir:0.05
  }


  //ground = Bodies.rectangle(0, 389, 400, 20, options);
  ground = new Box(200,390,400,20);
  right = new Box(390,200,20,400);
  left = new Box(10,200,20,400)
  up = new Box(200,10,400,20);

  ball = Bodies.circle(100, 10, 20, ballOptions);
  console.log(ball);
  World.add(world, ground);
  World.add(world, ball);
  console.log(ground);
  console.log(ball.velocityY)
}

function draw() 
{
  background("black");
  Engine.update(engine);
  ///ground.isStatic = true;
  ellipse(ball.position.x, ball.position.y, 20);
  ground.display();
  left.display();
  right.display();
  up.display();
}

function hForce() 
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}
function yForce() 
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}

