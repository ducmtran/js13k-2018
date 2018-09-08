var grid = {
  // array
  // left corner start point
  x: 100,
  y: 100,

  initialize: function(size) {
    this.size = size;
    this.array = new Array(size);
    for (let row=0; row<size; row++) {
      this.array[row] = new Array(size);
      for (let col=0; col<size; col++) {
        this.array[row][col] = 0;
      }
    }
  },
  getBlock: function(x, y) {
    return array[x][y];
  },
  render: function() {
        ctx.beginPath();
        ctx.rect(GAME_X, GAME_Y, GAME_W, GAME_H);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.stroke();
        ctx.closePath();
  }
}