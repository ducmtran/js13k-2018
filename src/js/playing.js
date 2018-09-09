S.playing = {
  level: -1,
  gameOver: 0, // failed: 0, success: 1
  resetLevel: true,

  update: function () {
    if (this.resetLevel) {
      if (G.levels[this.level] == undefined) {
        G.state = "gameover";
        return;
      }
      G.levels[this.level].load();
      this.resetLevel = false;
    }
    ship.handleInput();

    goal.winLogic();
    collision();

    // i start from 1 because player in 0
    for (let i = 1; i < G.fragments.length; i++) {
      G.fragments[i].update();
    }
    ship.update();
    ship.clearColliding(); // clear to check barrier
    ship.playAnimation('walk');
  },

  render: function() {
    // render background, scene, etc
    grid.render();
    // render player, in game objects
    for (let i = 0; i < G.fragments.length; i++) {
      G.fragments[i].render();
    }
    ship.render();
    goal.render();
  }

  
}