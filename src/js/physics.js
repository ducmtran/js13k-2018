function active_collision() {
  let frags = [];
  let active = [];
  let collision_check = [];

  for (let i = 0; i < fragments.length; i++) {
    let b = fragments[i].x;
    let e = b + 40;
    frags.push({ item: i, b: b, e: e })
  }
  frags.sort(function (f1, f2) {
    return f1.b - f2.b;
  })

  for (let i = 0; i < frags.length; i++) {
    for (let j = 0; j < active.length; j++) {
      if (active[j].e + 5 < frags[i].b) {
        // remove item
        for (let k = j; k < active.length - 1; k++) {
          active[k] = active[k + 1];
        }
        j--;
        active.pop();
      } else {
        collision_check.push([frags[i].item, active[j].item]);
      }
    }
    active.push(frags[i]);
  }
  return collision_check;
}

function collision() {
  let collision_pair = active_collision();
  // console.log(collision_pair);
  for (let i = 0; i < collision_pair.length; i++) {
    let f1 = fragments[collision_pair[i][0]];
    let f2 = fragments[collision_pair[i][1]];
    resolveCollision(f1, f2);
  }
}

function resolveCollision(f1, f2) {
  
  let rV = kontra.vector(f2.dx - f1.dx, f2.dy - f1.dy);
  let impulse = getNormalVector(f1, f2);
  if (impulse == undefined) return;

  // console.log('aaa');

  if (f1.dx > 0 && !(f2.dx > 0) && impulse.x == -1) {
    console.log(12);
    return;
  } 
  // if (f1.dx > 0 && impulse.x == -1) return;
  // if (f1.dy < 0 && impulse.y == -1) return;
  if (f1.dy > 0 && !(f2.dy > 0) && impulse.y == -1) {
    console.log(11);
    return;
  }

  let j = -2 * (rV.x * impulse.x + rV.y * impulse.y) * 5; //mass 10 for each
  impulse.x = impulse.x * j
  impulse.y = impulse.y * j;

  f1.dx -= (1 / 10) * impulse.x;
  f1.dy -= (1 / 10) * impulse.y;

  f2.dx += (1 / 10) * impulse.x;
  f2.dy += (1 / 10) * impulse.y

//   if (f1.x + 4 < f2.x + f2.width &&
//     f1.x + f1.width > f2.x + 4 &&
//     f1.y + 4 < f2.y + f2.height &&
//     f1.y + f1.height > f2.y + 4) {
//      // overlap/stuck detected!
//        f2.x -= (f2.x + f2.width - f1.x);
//        f2.y -= (f2.y + f2.height - f1.y);
//  }
}

function getNormalVector(f1, f2) {
  let n = kontra.vector(f1.x + f1.width / 2 - f2.x - f2.width / 2, f1.y + f1.height / 2 - f2.y - f2.height / 2);
  let v = kontra.vector(f2.x - f1.x, f2.y - f1.y);
  let normalVector = kontra.vector(0, 0);

  let overlapX = f1.width / 2 + f2.width / 2 - Math.abs(n.x);
  let overlapY = f1.height / 2 + f2.height / 2 - Math.abs(n.y);

  if (overlapX >= -5 && overlapY >= -5) {
    if (overlapX > overlapY) {
      if (v.y < 0) {
        normalVector.x = 0;
        normalVector.y = -1;
        return normalVector;
      } else {
        normalVector.x = 0;
        normalVector.y = 1;
        return normalVector;
      }
    } else {
      if (v.x < 0) {
        normalVector.x = -1;
        normalVector.y = 0;
        return normalVector;
      } else {
        normalVector.x = 1;
        normalVector.y = 0;
        return normalVector;
      }
    }
  }
}