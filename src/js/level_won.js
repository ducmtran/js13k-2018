S.level_won = {
  t: 0,
  update: function (dt) {
    player.dx = 0;
    player.dy = 0;
    this.t += dt;
    station.state = 'fixing';
    station.update();
    if (this.t > 2) {
      G.state = 'playing';
      S.playing.resetLevel = true;
      S.playing.level++;
    }
  },
  render: function () {
    grid.render();
    player.render();
    station.render();

  }
}