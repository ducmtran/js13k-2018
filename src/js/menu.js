states.menu = {
  update: function () {

    // initialize fragments + player
    if (fragments.length == 0) {
      spawnRandomFragments(7);
    }
    collision();
    for (let i = 0; i < fragments.length; i++) {
      fragments[i].update();
    };

    if (Key.released(Key.SPACE)) {
      state = 'playing';
      fragments.unshift(ship);
    }

  },
  render: function () {
    // render fragments
    for (let i = 0; i < fragments.length; i++) {
      fragments[i].render();
    }
    // render scene
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.closePath();
    // render text
    ctx.font = 'small-caps bold 50px cursive';
    ctx.fillText("Press Space to play",CANVAS_W/6, CANVAS_H/2);
    ctx.restore();

  }
}