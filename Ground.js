class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(0);
      rectMode(CENTER);
      //rect(ground.position.x,ground.position.y,ground.position.width,ground.position.height);
      //rectMode(CENTER);
      /* fill("brown");
      rect(pos.x, pos.y, this.width, this.height); */
    }
};