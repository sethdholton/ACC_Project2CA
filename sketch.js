let gen = [];
let size = 250;
let generation = 0;
let w = 5;

let ruleset = [0, 0, 0, 1, 1, 1, 1, 0];  // ruleset 30

function setup() {
  createCanvas(1400, 800);

  gen.length = size;

  console.log(gen[0]);

  for (let i = 0; i < gen.length; i++) {
    gen[i] = 0;
    if (i == Math.floor(gen.length / 2)) {
      gen[i] = 1;
    }
  }
}

function draw() {
  
  noStroke();
  for (let i = 0; i < gen.length; i = i + 1) {
    if (gen[i] == 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(i * w, generation * w, w, w);
  }

  if (generation < 120) {
    computeNextGen();
  }
}

function computeNextGen() {
  let nextGen = Array(size);

  for (let i = 0; i < gen.length; i = i + 1) {
    let a = gen[i - 1];
    if (a == undefined) {
      a = 0;
    }
    let b = gen[i];
    let c = gen[i + 1];
    if (c == undefined) {
      c = 0;
    }
    nextGen[i] = rule(a, b, c);
  }
  gen = nextGen;
  generation++;
}

//let ruleset = [0, 1, 0, 1, 1, 0, 1, 0]; 

function rule(a, b, c) {
  let numberString = "" + a + b + c;
  let index = parseInt(numberString, 2);
  return ruleset[7 - index];
}

