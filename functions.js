function calculateTax(price, taxRate) {
  return price + price * taxRate;
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

function processOrder(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const totalWithTax = calculateTax(subtotal, taxRate);
  return formatPrice(totalWithTax);
}

// Test
const orderTotal = processOrder(25.99, 3, 0.08);
console.log("Your total is:", orderTotal);

// The final total ($84.21) is rounded to two decimal places using toFixed(2),
// which may slightly differ from example outputs due to rounding.
