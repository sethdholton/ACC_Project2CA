let gen = [];
// Total number of cells in each generation,
// could also be called 'cols.'
let size = 32;
let generation = 0;
// Size of square width.
let w = 5;

// Declare ruleset for cellular automata.
let ruleset = [0, 0, 0, 1, 1, 1, 1, 0];  // ruleset 30

function setup() {
  createCanvas(1400, 800);

  // Apply generation size to length of gen array.
  gen.length = size;

  // Draw first generation with a black cell 
  // at the beginning of the second half.
  for (let i = 0; i < gen.length; i++) {
    gen[i] = 0;
    if (i == Math.floor(gen.length / 2)) {
      gen[i] = 1;
    }
  }
}

function draw() {
  
  // Style cells.
  noStroke();

  // Draw cells depending on content of gen array.
  for (let i = 0; i < gen.length; i = i + 1) {
    if (gen[i] == 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(i * w, generation * w, w, w);
  }

  // Generate 15 more rows.
  if (generation < 15) {
    computeNextGen();
  }
}

function computeNextGen() {
  // Create a new temporary gen array.
  let nextGen = Array(size);

  // Gather cell information from the current generation
  // using the previous, current, and next cell to fill out
  // the ruleset.
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
      // Define contents of array using the ruleset provided.
    nextGen[i] = rule(a, b, c);
  }

  // Update old gen with the new temporary gen.
  gen = nextGen;
  generation++;
}


function rule(a, b, c) {
  // Use cell information from the previous gen, return a
  // 0 or 1 based on the contents of the ruleset array.
  let numberString = "" + a + b + c;
  let index = parseInt(numberString, 2);
  return ruleset[7 - index];
}

