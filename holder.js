class Holder{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.Rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        }
        display(){
            strokeWeight(3);
            fill("red");
            stroke("red");
    }
}