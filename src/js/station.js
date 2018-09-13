var station;
var satelite = new Image();
satelite.src = './art/satelite.png';

satelite.onload = function () {
  var stationSprite = kontra.spriteSheet({
    image: satelite,
    frameWidth: 50,
    frameHeight: 245,
    animations: {
      broken: {
        frames: [0],
        frameRate: 1
      },
      fixing: {
        frames: [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        frameRate: 6
      }
    }
  })
  station = kontra.sprite({
    x: 750,
    y: 100,
    width: 50,
    height: 245,
    state: 'broken',
    animations: stationSprite.animations,
  
    winLogic: function () {
      if (player.x + player.width + 5 > this.x) {
        if (this.y + 72.5 < player.y && player.y < this.y + 172.5) {
          G.state = 'level_won';
          S.level_won.t = 0;
          return true;
        }
      }
    },

    update: function () {
      this.playAnimation(this.state);
      this.advance();
    }



  })
}
