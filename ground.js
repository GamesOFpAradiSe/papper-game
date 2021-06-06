class Ground{

constructor(){

var option ={

'isStatic' : true

}

this.body=Bodies.rectangle(width/2,windowHeight/1-100,windowWidth,10,option)

World.add(world,this.body);


}


    display()
    {
       var pos = this.body.position
        rectMode(CENTER);
        fill("grey")
        rect(pos.x,pos.y,windowWidth,10);

        
             
    


}


}