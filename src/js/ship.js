var ship = kontra.sprite({
  name: 'player',
  x: 100,
  y: 100,
  color: 'red',
  width: OBJ_SIZE,
  height: OBJ_SIZE,
  dx: 2,
  dy: 0,
  maxSpeed: 5,
  colliding: [0, 0, 0, 0],
  barrier: [0, 0, 0, 0],

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

    // barrier
    if (Key.isDown(Key.W) && active_barrier < 3) {
      this.barrier[0] = 1;
    } else this.barrier[0] = 0;
    if (Key.isDown(Key.A) && active_barrier < 3) {
      this.barrier[1] = 1;
    } else this.barrier[1] = 0;
    if (Key.isDown(Key.S) && active_barrier < 3) {
      this.barrier[2] = 1;
    } else this.barrier[2] = 0;
    if (Key.isDown(Key.D) && active_barrier < 3) {
      this.barrier[3] = 1;
    } else this.barrier[3] = 0;

    // grab/ungrab
    if (Key.released(Key.SPACE)) {
      console.log('grab');
      if (!this.isGrabbing) {
        this.grab();
      } else {
        this.ungrab();
      }
    }

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
    this.colliding[0] = 0;
    this.colliding[1] = 0;
    this.colliding[2] = 0;
    this.colliding[3] = 0;
  },

  grab: function () {
    for (let i = 0; i < fragments.length; i++) {
      // check nearby with x axis first
      if (Math.abs(this.x - fragments[i].x) < 50) {
        if (distanceSquared(this, fragments[i]) < 900) {
          // match speed with fragment
          fragments[i].grabbed = true;
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
    fragments[this.grabbing].grabbed = false;
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
    for (let i=0; i<4; i++) {
      if (this.colliding[i] > this.barrier[i]) {
        state = 'lost';
        break;
      }
    }

    this.advance();
  },

});