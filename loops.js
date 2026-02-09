const scores = [85, 45, 92, 67, 55, 78, 34, 88, 91, 50, 73, 62];

let passingCount = 0;
let failingCount = 0;
let highest = scores[0];
let lowest = scores[0];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  if (score >= 60) {
    passingCount++;
  } else {
    failingCount++;
  }

  if (score > highest) {
    highest = score;
  }

  if (score < lowest) {
    lowest = score;
  }

  total += score;
}

const average = total / scores.length;

// Print results
console.log("Passing:", passingCount);
console.log("Failing:", failingCount);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);

// All statistics were calculated in a single loop for efficiency,
// with average derived from the total sum of scores.
