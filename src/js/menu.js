S.menu = {
  update: function () {

    // initialize G.asteroids + player
    if (G.asteroids.length == 0) {
      spawnRandomAsteroids(7);
    }
    collision();
    for (let i = 0; i < G.asteroids.length; i++) {
      G.asteroids[i].update();
    };

    if (Key.released(Key.SPACE)) {
      G.state = 'playing';
      S.playing.level++;
      S.playing.resetLevel = true;
    }

  },
  render: function () {
    // render G.asteroids
    for (let i = 0; i < G.asteroids.length; i++) {
      G.asteroids[i].render();
    }
    // render scene
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.closePath();
    ctx.restore();
    // render text holder
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = '#020811';
    ctx.fillRect(CANVAS_W/4, CANVAS_H/4, CANVAS_W/2, CANVAS_H/2);
    // render text
    ctx.fillStyle = 'white';
    ctx.font = 'small-caps 30px verdana';
    ctx.fillText("FRIENDLY ALIEN", CANVAS_W/4 + 75, CANVAS_H/2-50, 300);
    ctx.font = 'small-caps 15px verdana';
    ctx.fillText("PRESS SPACE TO PLAY", CANVAS_W/4 + 120, CANVAS_H/2, 300);
    ctx.font = 'small-caps 15px verdana';
    ctx.fillText("arrow to move", CANVAS_W/3+ 80, CANVAS_H/2 + 50, 200);
    ctx.restore();

  }
}