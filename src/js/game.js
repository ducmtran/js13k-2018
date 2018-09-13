// initialize global variables, state etc
function init() {
  G.state = 'menu';
  G.levels = [level_1, level_2, level_3, level_4, level_5, level_6, level_7, level_8];
  G.asteroids = [];
  background.randomizeStar();
}

let loop_k = kontra.gameLoop({
  fps: 60,
  clearCanvas: false,
  update: function (dt) {

    if (G.state == 'playing') {
      S.playing.update(dt);
    } else if (G.state == 'menu') {
      S.menu.update();
    } else if (G.state == 'level_won') {
      S.level_won.update(dt);
    } else if (G.state == 'gameover') {
      S.gameover.update();
    }

    // input update
    Key.update();
  },
  render: function () {

    background.render();

    if (G.state == 'playing') {
      S.playing.render();
    } else if (G.state == 'menu') {
      S.menu.render();
    } else if (G.state == 'level_won') {
      S.level_won.render();
    } else if (G.state == 'gameover') {
      S.gameover.render();
    }
  }
})
init();
loop_k.start();