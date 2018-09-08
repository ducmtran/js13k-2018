var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// TODO: setup file: bound_canvas, bound_level
const CANVAS_W = canvas.width;
const CANVAS_H = canvas.height;
const OBJ_SIZE = 32;
const GAME_X = 50;
const GAME_Y = 0;
const GAME_W = 700;
const GAME_H = 400;
const BOUND_X = GAME_X + GAME_W - OBJ_SIZE;
const BOUND_Y = GAME_Y + GAME_H - OBJ_SIZE;

// store all states of the game in here
// menu, playing, over
var states = {};
var levels = {};
