class Boy {

    constructor(){
    
      this.body = Bodies.rectangle(windowWidth/6,height/1-190,20,0,{ isStatic : true})
     
    
      this.image = loadImage("b.png");
    
      World.add(world,this.body)  
    
    
    }
    
    display(){
    
    var pos = this.body.position
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,150,200);
    
    
    }
    
    
    
    }