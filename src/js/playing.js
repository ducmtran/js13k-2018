states.playing = {
  update: function () {
    ship.handleInput();

    goal.winLogic();
    collision();

    // i start from 1 because player in 0
    for (let i = 1; i < fragments.length; i++) {
      fragments[i].update();
    }
    ship.update();
    ship.clearColliding();
  },

  render: function() {
    // render background, scene, etc
    grid.render();
    // render player, in game objects
    for (let i = 0; i < fragments.length; i++) {
      fragments[i].render();
    }
    ship.render();
    goal.render();
  }

  
}