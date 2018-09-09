S.menu = {
  update: function () {

    // initialize G.fragments + player
    if (G.fragments.length == 0) {
      spawnRandomFragments(7);
    }
    collision();
    for (let i = 0; i < G.fragments.length; i++) {
      G.fragments[i].update();
    };

    if (Key.released(Key.SPACE)) {
      G.state = 'playing';
      S.playing.level++;
      S.playing.resetLevel = true;
    }

  },
  render: function () {
    // render G.fragments
    for (let i = 0; i < G.fragments.length; i++) {
      G.fragments[i].render();
    }
    // render scene
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.closePath();
    ctx.restore();
    // render text
    ctx.save();
    ctx.font = 'small-caps bold 50px cursive';
    ctx.fillText("Press Space to play",CANVAS_W/6, CANVAS_H/2);
    ctx.restore();

  }
}