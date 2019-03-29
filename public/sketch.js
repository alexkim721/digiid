function setup() {
  createCanvas(innerWidth, innerHeight);
  color1 = color(174, 21, 255);
  color2 = color(255, 62, 250);
  //createGradient(0,0,width,height,color1,color2);
}

function draw() {
  color1 = color(174, 21, 255);
  color2 = color(255, 62, 250);
  color3 = color(98, 249, 98);
  color4 = color(255, 255, 100);
  scales(25, color1, color2);
  // circGrid(25,color1,color2);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse((width / 11) * 4, (height / 5) * 2, 700);
  gradCircle(800, 300, 200, color3, color4);
  gradCircle(100, 50, 100, color1, color2);

  fill(255);
  ellipse((width / 4) * 3, 250, 150);
}

function gradCircle(x, y, r, c1, c2) {
  //const gradCircleR = 200;
  const lineW = 1;
  const lines = (r * 2) / lineW;

  noStroke();
  for (var i = 0; i <= lines; i++) {
    let inter = map(i, 0, r, 0, 0.8);
    let c = lerpColor(c1, c2, inter);
    fill(c);
    const s = i * lineW + lineW;
    const chordLength = Math.sqrt(2 * s * r - s * s) * 2;
    rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength);
  }
  stroke(255);
  noFill();
  ellipse(x + r + 20, y + r + 20, r * 2);
}

function scales(r, c1, c2) {
  let y = 0;
  let isShifted = false;
  while (y < height + r) {
    if (isShifted) {
      x = 0;
    } else {
      x = r;
    }
    while (x < width) {
      inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c1, c2, inter);
      fill(c);
      stroke(lerpColor(c2, c1, inter));
      ellipse(x, y, r * 2);
      x = x + r * 2;
    }
    y = y + r;
    isShifted = !isShifted;
  }
}

function circGrid(r, c1, c2) {
  let y = 0;

  while (y < height + r) {
    let x = 0;
    while (x < width) {
      inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c1, c2, inter);
      fill(c);
      stroke(255);
      ellipse(x, y, r * 2);
      x = x + r * 2;
    }
    y = y + r * 2;
  }
}

function createGradient(x, y, w, h, c1, c2) {
  for (let i = x; i <= x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h);
  }
}
