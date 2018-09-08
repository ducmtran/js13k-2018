// initialize global variables, state etc
function init() {
  state = 'menu'; //playing, paused, menu
  fragments = [];
  // fragments.push(ship);

  // fragments.push(create_fragment(100, 200, 0, -2, 'red'));
  // fragments.push(create_fragment(250, 100, 1, 0, 'blue'));
  // fragments.push(create_fragment(300, 100, -3, 0, 'red'));
  // fragments.push(create_fragment(230, 100, -2, 0, 'blue'));
  // spawnRandomFragments(4);
}

let loop_k = kontra.gameLoop({
  fps: 60,
  clearCanvas: true,
  update: function (dt) {

    if (state == 'playing') {
      states.playing.update();
    } else if (state == 'menu') {
      states.menu.update();
    }

    // input update
    Key.update();
  },
  render: function () {
    if (state == 'playing') {
      states.playing.render();
    } else if (state =='menu') {
      states.menu.render();
    }
  }
})

init();
loop_k.start();
// setInterval(loop, 16);

// setInterval(loop);