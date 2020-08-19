let pi;
let totalPoints;
let circlePoints;
let maxPoints = 1000;

function setup() {
  createCanvas(600, 600);
  initValues();
}

function initValues() {
  background(255);
  strokeWeight(3);
  stroke('black');
  noFill();

  circle(width * 0.5, height * 0.5, height);
  rect(0, 0, height);  
  line(width * 0.5, height * 0.5, width, height * 0.5);
  line(width * 0.5, height * 0.5, width * 0.5, 0);

  pi = 0;
  totalPoints = 0;
  circlePoints = 0;
}

function drawNewPoint() {
  let x = floor(random(0, width));
  let y = floor(random(0, height));

  if (dist(x, y, width * 0.5, height * 0.5) <= height * 0.5) {
    circlePoints++;
    stroke('red');
  } else {
    stroke('blue');
  }

  strokeWeight(5);
  point(x, y);
  totalPoints++;

  pi = 4 * (circlePoints / totalPoints);
  // console.log([circlePoints, totalPoints] + ": " + pi);
}

function draw() {
  if (totalPoints < maxPoints)
    drawNewPoint();
  else {
    initValues();
  }
}