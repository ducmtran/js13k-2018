// initialize global variables, state etc
function init() {
  G.state = 'menu'; //playing, paused, menu
  G.levels = [level_1, level_2];
  G.fragments = [];
  background.randomizeStar();
  // fragments.push(ship);

  // fragments.push(create_fragment(100, 200, 0, -2, 'red'));
  // fragments.push(create_fragment(250, 100, 1, 0, 'blue'));
  // fragments.push(create_fragment(300, 100, -3, 0, 'red'));
  // fragments.push(create_fragment(230, 100, -2, 0, 'blue'));
  // spawnRandomFragments(4);
}

let loop_k = kontra.gameLoop({
  fps: 60,
  clearCanvas: false,
  update: function (dt) {

    if (G.state == 'playing') {
      S.playing.update();
    } else if (G.state == 'menu') {
      S.menu.update();
    } else if (G.state == 'won_screen') {
      
    }

    // input update
    Key.update();
  },
  render: function () {
    background.render();

    if (G.state == 'playing') {
      S.playing.render();
    } else if (G.state =='menu') {
      S.menu.render();
    }
  }
})

init();
loop_k.start();
// setInterval(loop, 16);

// setInterval(loop);