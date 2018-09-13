var grid = {
  render: function() {
        ctx.save()
        ctx.beginPath();
        ctx.rect(GAME_X, GAME_Y, GAME_W, GAME_H);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

  }
}