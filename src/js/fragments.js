function spawnFragments() {
  let fragment = kontra.sprite({
    name: 'fragment',
    x: GAME_X + Math.floor(Math.random() * BOUND_X + 1),
    y: GAME_Y + Math.floor(Math.random() * BOUND_Y + 1),
    color: '#808000',
    height: OBJ_SIZE,
    width: OBJ_SIZE,
    dx: Math.random() * 7 - 1.5,
    dy: Math.random() * 7 - 1.5,
    maxSpeed: 4,

    update: function () {
      if (this.x < GAME_X) this.dx = Math.abs(this.dx);
      if (this.x > BOUND_X) this.dx = -Math.abs(this.dx);
      if (this.y > BOUND_Y) this.dy = -Math.abs(this.dy);
      if (this.y < GAME_Y) this.dy = Math.abs(this.dy);
      if (this.grabbed) {
        this.ddx = ship.ddx;
        this.ddy = ship.ddy;
      } else {
        this.ddx = 0;
        this.ddy = 0;
      }

      // limit speed
      if (this.dx > this.maxSpeed) this.dx = this.maxSpeed;
      else if (this.dx < -this.maxSpeed) this.dx = -this.maxSpeed;
      if (this.dy > this.maxSpeed) this.dy = this.maxSpeed;
      else if (this.dy < -this.maxSpeed) this.dy = -this.maxSpeed;

      this.advance();

      if (this.grabbed) {
        ship.x = this.x;
        ship.y = this.y;
      }
    },
  })
  return fragment;
}

// debug function
function create_fragment(x, y, dx, dy, color) {
  let fragment = kontra.sprite({
    x: x,
    y: y,
    color: color,
    height: 40,
    width: 40,
    dx: dx,
    dy: dy,

    update: function () {
      if (this.x < 0) this.dx = Math.abs(this.dx);
      if (this.x > 760) this.dx = -Math.abs(this.dx);
      if (this.y > 460) this.dy = -Math.abs(this.dy);
      if (this.y < 0) this.dy = Math.abs(this.dy);
      this.advance();
    }
  })
  return fragment;
}

function spawnRandomFragments(n) {
  for (let i = 0; i < n; i++) {
    fragments.push(spawnFragments());
  }
}
