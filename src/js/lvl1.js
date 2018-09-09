var level_1 = {
  count: 3,
  f: [[400, 50, 0, 2],
      [500, 50, 0, 2],
      [600, 50, 0, 2]],
  load: function() {
    G.fragments = [];
    G.fragments.push(ship);
    for (let i=0; i<this.count; i++) {
      G.fragments.push(spawnFragment(this.f[i]));
    }
  }
}