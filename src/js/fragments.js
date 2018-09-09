let asteroid = new Image();
asteroid.src = './art/asteroid.png';
function spawnFragment(values) {
  let fragment = kontra.sprite({
    name: 'fragment',
    x: GAME_X + values[0],
    y: GAME_Y + values[1],
    color: '#808000',
    height: OBJ_SIZE,
    width: OBJ_SIZE,
    image: asteroid,
    dx: values[2],
    dy: values[3],
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

function spawnRandomFragments(n) {
  for (let i = 0; i < n; i++) {
    G.fragments.push(spawnFragment(
                            [Math.floor(Math.random() * BOUND_X + 1),
                            Math.floor(Math.random() * BOUND_Y + 1),
                            Math.random() * 3 - 1.5,
                            Math.random() * 3 - 1.5
      ]));
  }
}
