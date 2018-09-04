var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lastTime, current, dt;

// initialize global variables, state etc
function init() {
  state = 'playing'; //playing, paused
  fragments = [];
  grid.initialize(3);

  // fragments.push(create_fragment(100, 200, 0, -2, 'red'));
  // fragments.push(create_fragment(100, 300, 0, -3, 'blue'));
  // fragments.push(create_fragment(300, 100, -3, 0, 'red'));
  // fragments.push(create_fragment(230, 100, -2, 0, 'blue'));
  spawnRandomFragments(8);
}

let loop_k = kontra.gameLoop({
  fps: 60,
  clearCanvas: true,
  update: function (dt) {
    ship.handleInput();
    ship.update();
    collision();
    for (let i = 0; i < fragments.length; i++) {
      fragments[i].update();
    }
  },
  render: function () {
    grid.render();
    for (let i = 0; i < fragments.length; i++) {
      fragments[i].render();
    }
    ship.render();
  }
})

init();
loop_k.start();
// setInterval(loop, 16);

// setInterval(loop);