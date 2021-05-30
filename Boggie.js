class Boggie{
    constructor(x,y){
        var options = {
            'restitution' : 0.01,
            'density' : 0.3,
        }

        this.body = Bodies.rectangle(x, y, 100, 50, options);
        this.width = 100;
        this.height = 50;
        this.image = loadImage("images/coach.png");

        World.add(myWorld, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 100, 50 );
        pop();
    }
}