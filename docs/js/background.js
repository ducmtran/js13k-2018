var background = {
  stars: [],
  randomizeStar: function () {
    for (let i = 0; i < 100; i++) {
      this.stars.push([Math.random() * 800, Math.random() * 400, Math.random() * 5]);
    }
  },
  render: function () {
    ctx.save()
    ctx.beginPath();
    ctx.rect(0, 0, CANVAS_W, CANVAS_H);
    ctx.fillStyle = "rgba(8, 6, 51, 1)";
    ctx.fill();
    ctx.closePath();

    for (let i = 0; i < 100; i++) {
      // ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.arc(this.stars[i][0], this.stars[i][1], this.stars[i][2], 0, 2 * Math.PI);
      ctx.fill();
      // ctx.restore();
    }

    ctx.restore();
  }
}