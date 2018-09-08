var goal = kontra.sprite({
  x: 750,
  y: 200,
  width: 100,
  height: 100,
  color: 'green',
  winLogic: function() {
    if (ship.x + ship.width + 5 > this.x) {
      if (200 < ship.y && ship.y < 300) {
        state = 'won';
      }
    }
  }
})