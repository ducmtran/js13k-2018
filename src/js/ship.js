var ship = kontra.sprite({
  x: 200,
  y: 200,
  color: 'red',
  width: 30,
  height: 30,
  dx: -1,
  dy: -1,
  isGrabbing: false,
  grabbing: 0,

  handleInput: function() {
    // movement
    if (kontra.keys.pressed('up')) this.ddy = -0.1;
    else if (kontra.keys.pressed('down')) this.ddy = 0.1;
    else this.ddy = 0;
    
    if (kontra.keys.pressed('left')) this.ddx = -0.1;
    else if (kontra.keys.pressed('right')) this.ddx = 0.1;
    else this.ddx = 0;

    // grab
    if (kontra.keys.pressed('space')) {
      if (!this.isGrabbing) {
        this.grab();
      }
    }

  },

  grab: function() {
    for (let i=0; i<fragments.length; i++) {
      // check nearby with x axis first
      console.log('sth');
      if (Math.abs(this.x - fragments[i].x) < 50) {
        if (distanceSquared(this, fragments[i]) < 225) {
          // drag fragment with ship
          fragments[i].grabbed = true;
          this.isGrabbing = true;
          this.grabbing = i;
          return;
        }
      }
    }
  },
  update: function() {
    if (this.x < 3 || this.x > 370) this.dx = -this.dx;
    if (this.y < 3 || this.y > 370) this.dy = -this.dy;
    
    // limit ship's speed
    if (this.dx > 10) this.dx = 10;
    if (this.dx < -10) this.dx = -10;
    if (this.dy > 10) this.dy = 10;
    if (this.dy < -10) this.dy = -10;


    this.advance();
  },
});