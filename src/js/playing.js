S.playing = {
  level: -1,
  gameOver: 0, // failed: 0, success: 1
  resetLevel: true,
  t: 0,

  update: function (dt) {
    if (this.resetLevel) {
      if (G.levels[this.level] == undefined) {
        G.state = "gameover";
        return;
      }
      this.loadLevel(G.levels[this.level]);
      this.resetLevel = false;

      this.t = 0;
      station.state = 'broken';
    }
    player.handleInput();
    this.t += dt;
    
    station.winLogic();
    collision();

    // i start from 1 because player in 0
    for (let i = 1; i < G.asteroids.length; i++) {
      G.asteroids[i].update();
    }
    if (this.gameOver) {
      player.dx = player.dy = 0;
      G.asteroids = [];
    } else {
      player.update();
    }
    station.update();

  },

  loadLevel: function (level) {
    G.asteroids = [];
    G.asteroids.push(player);
    for (let i = 0; i < level.f.length; i++) {
      G.asteroids.push(spawnAsteroid(level.f[i]));
    }
    player.x = level.p[0];
    player.y = level.p[1];
    player.dx = level.p[2];
    player.dy = level.p[3];
  },

  render: function () {
    // render background, scene, etc
    if (G.state != 'playing') {
      return;
    }
    if (this.t < 1) {
      // level at opening
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = '#020811';
      ctx.fillRect(325, 175, 160, 50);
      ctx.fillStyle = 'white';
      ctx.font = 'small-caps 30px verdana';
      ctx.fillText("LEVEL " + (this.level + 1), 350, 210, 200);
      ctx.restore();
    }
    grid.render();
    // render player, in game objects
    for (let i = 0; i < G.asteroids.length; i++) {
      G.asteroids[i].render();
    }

    player.render();
    station.render();
  }


}