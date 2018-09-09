let player = new Image();
player.src = './art/player.png';

var playerSprite = kontra.spriteSheet({
  image: player,
  frameWidth: 40,
  frameHeight: 40,
  animations: {
    walk: {
      frames: '0..1',
      frameRate: 1
    }
  }

})

var ship = kontra.sprite({
  name: 'player',
  x: 100,
  y: 100,
  color: 'red',
  width: 40,
  height: 40,
  dx: 2,
  dy: 0,
  maxSpeed: 5,
  colliding: [0, 0, 0, 0],
  barrier: [0, 0, 0, 0],
  animations: playerSprite.animations,

  handleInput: function () {
    // movement
    if (Key.isDown(Key.UP)) this.ddy = -0.1;
    else if (Key.isDown(Key.DOWN)) this.ddy = 0.1;
    else this.ddy = 0;
    if (Key.isDown(Key.LEFT)) this.ddx = -0.1;
    else if (Key.isDown(Key.RIGHT)) this.ddx = 0.1;
    else this.ddx = 0;

    let active_barrier = this.barrier[0] +
      this.barrier[1] +
      this.barrier[2] +
      this.barrier[3];
    this.barrier = [0,0,0,0];

    // barrier
    if (Key.isDown(Key.W) && active_barrier < 2) {
      this.barrier[0] = 1;
    } else this.barrier[0] = 0;
    active_barrier = this.barrier[0] +
      this.barrier[1] +
      this.barrier[2] +
      this.barrier[3];
    if (Key.isDown(Key.A) && active_barrier < 2) {
      this.barrier[1] = 1;
    } else this.barrier[1] = 0;
    active_barrier = this.barrier[0] +
      this.barrier[1] +
      this.barrier[2] +
      this.barrier[3];
    if (Key.isDown(Key.S) && active_barrier < 2) {
      this.barrier[2] = 1;
    } else this.barrier[2] = 0;
    active_barrier = this.barrier[0] +
      this.barrier[1] +
      this.barrier[2] +
      this.barrier[3];
    if (Key.isDown(Key.D) && active_barrier < 2) {
      this.barrier[3] = 1;
    } else this.barrier[3] = 0;
  },

  handleCollision: function (direction) {
    if (direction == undefined) {
      return;
    }
    if (direction.x == 1) this.colliding[1] = 1;
    if (direction.x == -1) this.colliding[3] = 1;
    if (direction.y == 1) this.colliding[0] = 1;
    if (direction.y == -1) this.colliding[2] = 1;
  },

  clearColliding: function () {
    this.colliding = [0,0,0,0];
  },

  grab: function () {
    for (let i = 0; i < G.fragments.length; i++) {
      // check nearby with x axis first
      if (Math.abs(this.x - G.fragments[i].x) < 50) {
        if (distanceSquared(this, G.fragments[i]) < 900) {
          // match speed with fragment
          G.fragments[i].grabbed = true;
          this.isGrabbing = true;
          this.grabbing = i;
          this.dx = 0;
          this.dy = 0;
          this.ddx = 0;
          this.ddy = 0;
          return;
        }
      }
    }
  },

  ungrab: function () {
    this.isGrabbing = false;
    G.fragments[this.grabbing].grabbed = false;
    this.grabbing = -1;
  },

  update: function () {
    // handle bound
    if (this.x < GAME_X) this.dx = Math.abs(this.dx);
    if (this.x > BOUND_X) this.dx = -Math.abs(this.dx);
    if (this.y > BOUND_Y) this.dy = -Math.abs(this.dy);
    if (this.y < GAME_Y) this.dy = Math.abs(this.dy);

    // limit ship's speed
    if (this.dx > this.maxSpeed) this.dx = this.maxSpeed;
    if (this.dx < -this.maxSpeed) this.dx = -this.maxSpeed;
    if (this.dy > this.maxSpeed) this.dy = this.maxSpeed;
    if (this.dy < -this.maxSpeed) this.dy = -this.maxSpeed;

    // handle barrier
    for (let i = 0; i < 4; i++) {
      if (this.colliding[i] > this.barrier[i]) {
        S.playing.resetLevel = true;
        break;
      }
    }

    this.advance();
  },

  render: function () {
    ctx.save();
    ctx.strokeStyle = 'blue';
    for (let i = 0; i < 4; i++) {
      if (this.barrier[i] == 1) {
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2,
          this.y + this.height / 2,
          28,
          Math.PI / 4 * (-3 - 2*i),
          Math.PI / 4 * (-1 - 2*i));
        ctx.stroke()
      }
    }
    ctx.restore();
    this.draw();

  }

});