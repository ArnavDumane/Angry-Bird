class Box{
   constructor(x,y,width,height){
     var boxOptions={restitution:1,
      friction:1.0}
    
     this.body=Bodies.rectangle(x,y,width,height,boxOptions)
     this.width=width;
     this.height=height;
     World.add(world, this.body)
   }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(4)
        stroke("green")
        fill("white")
        rect(0,0,this.width,this.height)
        pop();
    }

}