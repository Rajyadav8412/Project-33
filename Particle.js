class particle {
    constructor(x,y,radius) {
      var options = {
          
          "restitution":0.7
      }
      this.radius=radius;
      this.body = Bodies.circle(x,y,radius,options);
     
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var posX =this.body.position.x;
      var posY=this.body.position.y;
      var angle=this.body.angle;
      push();
      translate(posX,posY);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.color);
      
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
