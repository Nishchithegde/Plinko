const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(480,635);

    engine = Engine.create();
    world = engine.world;

    corner1 = new Ground(width/2,height,width+5,15);
    corner2 = new Ground(width,height/2,15,height);
    corner3 = new Ground(width-480,height/2,15,height);

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Division(k,height-divisionhHeight/2,10,divisionhHeight));
    }

    for (var i = 40; i <=width; i=i+50){
        plinkos.push(new Plinko(i,75,10))
    }

    for (var i = 15; i <=width-10; i=i+50){
        plinkos.push(new Plinko(i,175,10))
    }

    for (var i = 40; i <=width; i=i+50){
        plinkos.push(new Plinko(i,275,10))
    }

    for (var i = 15; i <=width-10; i=i+50){
        plinkos.push(new Plinko(i,375,10))
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    corner1.display();
    corner2.display();
    corner3.display();
    
    for (var k = 0; k< divisions.length; k++) {
        divisions[k].display();
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    if (frameCount%60===0){
        particles.push(new Particles(random(width/2-50,width/2+50),10,10));
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }
}

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionhHeight=200;