const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground, rock;
var boggie1,boggie2,boggie3, boggie4;
var chain1, chain2, chain3;
var trainSound 
var crashSound
var flag = 0;
var collision;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  rock = new Rock();

  boggie1 = new Boggie(100, 300);
  boggie2 = new Boggie(220, 300);
  boggie3 = new Boggie(340, 300);
  boggie4 = new Boggie(460, 300);

  chain1 = new Chain(boggie1.body, boggie2.body);
  chain2 = new Chain(boggie2.body, boggie3.body);
  chain3 = new Chain(boggie3.body, boggie4.body);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  chain1.show();
  chain2.show();
  chain3.show();

  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();

  rock.display();

  collision = Matter.SAT.collides(boggie4.body, rock.body);
  // console.log(collision);

  if(collision.collided) {
    flag = 1;
  }

  if(flag === 1) {
    textSize(30);
    fill("red");
    text("CRASHED!!", 500, 150);
    crashSound.play();
    trainSound.stop();
  }
  

  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggie4.body,boggie4.body.position, {x: 50, y: 0});
      trainSound.play();
    }
  }
