window.addEventListener('keyup', function (event) {
  Key.onKeyup(event);
}, false);
window.addEventListener('keydown', function (event) {
  Key.onKeydown(event);
}, false);

Key = {

  _pressed: {},
  _released: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  W: 87,
  A: 65,
  S: 83,
  D: 68,

  isDown(keyCode) {
      return this._pressed[keyCode];
  },

  released(keyCode) {
      return this._released[keyCode];
  },

  onKeydown(event) {
      this._pressed[event.keyCode] = true;
  },

  onKeyup(event) {
      this._released[event.keyCode] = true;
      delete this._pressed[event.keyCode];
  },

  update() {
      this._released = {};
  }
};
