
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2,mango3;
var world,boy;
var rope;	

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
  mango3=new mango(1100,180,30);

	stoneObj=new Stone(220,400,60,60);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	rope = new Rope(stoneObj.body,{x:220,y:400});

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
  stoneObj.display();

  mango2.display();
  mango3.display();

  rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
    rope.fly();

}