// Declare the counter outside the loop
let i;

for (i = 1; i <= 5; i++) {
  console.log("Inside loop, i =", i);
}

// i is still accessible here
console.log("Outside loop, final value of i =", i);

// When the loop finishes, i becomes 6 because it increments once more
// before the loop condition fails (i <= 5).
