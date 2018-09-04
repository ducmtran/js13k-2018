class Piece {
  constructor(x, y, type) {
    this.pos_x = x;
    this.pos_y = y;
    this.type = type;
  }

  static spawn_pieces() {
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
    game_state.pieces.push(new Piece(Math.floor(Math.random() * 400),
      Math.floor(Math.random() * 400), 1));
  }

  static render_piece(piece) {
    ctx.beginPath();
    ctx.rect(piece.pos_x, piece.pos_y, 30, 30);
    ctx.fillStyle = "#808000";
    ctx.fill();
    ctx.closePath();
  }

  static render_all(array) {
    for (let i = 0; i < array.length; i++) {
      this.render_piece(array[i]);
    }
  }
}

var p = new Piece(40, 40, 1);