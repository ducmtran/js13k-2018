function spawnFragments() {
  let fragment = kontra.sprite({
    x: Math.floor(Math.random() * 360 + 1),
    y: Math.floor(Math.random() * 360 + 1),
    color: '#808000',
    height: 40,
    width: 40,
    dx: Math.random()*3  - 0.5,
    dy: Math.random()*3  - 0.5,
    grabbed: false,

    update: function () {
      if (this.x < 0 || this.x > 360) this.dx = -this.dx;
      if (this.y < 0 || this.y > 360) this.dy = -this.dy;
      if (this.grabbed) {
        this.ddx = ship.ddx;
        this.ddy = ship.ddy;
      }

      this.advance();
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
      if (this.x < 0 || this.x > 360) this.dx = -this.dx;
      if (this.y < 0 || this.y > 360) this.dy = -this.dy;
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
