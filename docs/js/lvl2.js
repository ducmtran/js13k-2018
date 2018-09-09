var level_2 = {
  count: 8,
  f: [[300, 50, 0, 2],
      [400, 50, 0, 2],
      [500, 50, 0, 2],
      [600, 50, 0, 2],
      [300, 350, 0, -2],
      [400, 350, 0, -2],
      [500, 350, 0, -2],
      [600, 350, 0, -2]],

  ship: [200, 200, 0, 2],
  load: function () {
    G.fragments = [];
    G.fragments.push(ship);
    for (let i=0; i<this.count; i++) {
      G.fragments.push(spawnFragment(this.f[i]));
    }
    ship.x = this.ship[0];
    ship.y = this.ship[1];
    ship.dx = this.ship[2];
    ship.dy = this.ship[3];
  }
}