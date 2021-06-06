class Ball{

constructor(){

var option={

isStatic : false,
restitution : 0.3,
friction : 0.5,
density : 1.2
}

this.body=Bodies.circle(width/6,height/6,50,option);

this.image = loadImage("c1.png")

World.add(world,this.body);




}


display()
{
    
   var pos = this.body.position
  
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
    
    
     
}


}


