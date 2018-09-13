S.gameover = {
  update: function () {
        // initialize G.asteroids
        if (G.asteroids.length == 0) {
          spawnRandomasteroids(7);
        }
        collision();
        for (let i = 0; i < G.asteroids.length; i++) {
          G.asteroids[i].update();
        };
    
        if (Key.released(Key.SPACE)) {
          G.state = 'menu';
          S.playing.level = -1;
        }
  },

  render: function () {
    // text holder
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = '#020811';
    ctx.fillRect(CANVAS_W/4, CANVAS_H/4, CANVAS_W/2, CANVAS_H/2);
    ctx.restore();
    
    // render text
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = 'small-caps 30px verdana';
    ctx.fillText("THE END", CANVAS_W/4 + 50, CANVAS_H/2, 300);
    ctx.font = 'small-caps 15px verdana';
    ctx.fillText("THANKS FOR PLAYING", CANVAS_W/3+ 80, CANVAS_H/2 + 50, 200);
    ctx.restore();
  }
}