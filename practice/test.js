// test.js
function add(a, b) {
  return a + b;
}

// Simple assertion
if (add(2, 3) !== 5) {
  console.error("Test failed!");
  process.exit(1);
}

console.log("✅ All tests passed!");