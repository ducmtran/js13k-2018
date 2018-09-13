var player;
let alien = new Image();
alien.src = './art/alien.png';

alien.onload = function() {
  player = kontra.sprite({
    type: 'player',
    x: 100,
    y: 0,
    width: 40,
    height: 40,
    dx: 0,
    dy: 0,
    image: alien,
    color: 'red',
    maxSpeed: 5,
    colliding: [0, 0, 0, 0],
    barrier: [1, 0, 0, 0],
    // animations: playerSprite.animations,
  
    handleInput: function () {
      // movement
      this.barrier = [0,0,0,0];
      if (Key.isDown(Key.UP)) {
        this.ddy = -0.1;
        if (this.dy > 0) this.ddy = -0.15;
      }
      else if (Key.isDown(Key.DOWN)) {
        this.ddy = 0.1;
        if (this.dy < 0) this.ddy = 0.15;
      }
      else this.ddy = 0;
  
      if (Key.isDown(Key.LEFT)) {
        this.ddx = -0.1;
        if (this.dx > 0) this.ddx = -0.15;
      } 
      else if (Key.isDown(Key.RIGHT)) {
        this.ddx = 0.1;
        if (this.dx < 0) this.ddx = 0.15;
      } else this.ddx = 0;
  
    },
  
    update: function () {
      // handle bound
      if (this.x < GAME_X) this.dx = Math.abs(this.dx) * 0.95;
      if (this.x > BOUND_X) this.dx = -Math.abs(this.dx) * 0.95;
      if (this.y > BOUND_Y) this.dy = -Math.abs(this.dy) * 0.95;
      if (this.y < GAME_Y) this.dy = Math.abs(this.dy) * 0.95;
  
      // limit ship's speed
      if (this.dx > this.maxSpeed) this.dx = this.maxSpeed;
      if (this.dx < -this.maxSpeed) this.dx = -this.maxSpeed;
      if (this.dy > this.maxSpeed) this.dy = this.maxSpeed;
      if (this.dy < -this.maxSpeed) this.dy = -this.maxSpeed;

      this.advance();
    },
  
  });
}