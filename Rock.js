class Rock{
    constructor(){
        var options = {
            isStatic : true,
            'restitution' : 0.01,
            'density' : 0.4,
        }

        this.body = Bodies.rectangle(800, 350, 150, 100, options);
        this.width = 150;
        this.height = 100;
        this.image = loadImage("images/rock1.png");

        World.add(myWorld, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 150, 100 );
        pop();
    }
}