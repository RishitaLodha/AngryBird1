class log {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(300,200,30,80);
        this.width = 30;
        this.height = 80;
        this.image = loadImage("wood2.png");
        World.add(world,this.body);
    }
    display(){
        push()
       // translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
pop()
    }
    
}