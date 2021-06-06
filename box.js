class Box {

constructor(){

  this.body = Bodies.rectangle(windowWidth/2+500,height/1-190,80,2,{ isStatic : true})
 

  this.image = loadImage("db.png");

  World.add(world,this.body)  


}

display(){

var pos = this.body.position
imageMode(CENTER);
image(this.image, pos.x,pos.y,150,200);


}



}