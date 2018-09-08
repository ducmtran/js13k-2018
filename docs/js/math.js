function distanceSquared(f1, f2) {
  let a = Math.pow(f1.x - f2.x, 2);
  let b = Math.pow(f1.y - f2.y, 2);
  return a+b;
}