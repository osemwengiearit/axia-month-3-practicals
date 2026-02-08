const shoppingCart = ["apple", "bread", "milk"];
console.log("Initial cart:", shoppingCart);

// Add items
shoppingCart.push("eggs");
shoppingCart.push("cheese");
console.log("After adding items:", shoppingCart);

// Remove last item
shoppingCart.pop();
console.log("After removing last item:", shoppingCart);

// Change first item
shoppingCart[0] = "orange";
console.log("After changing first item:", shoppingCart);

// Try to reassign (this will cause an error)
// shoppingCart = ["new", "array"];

console.log("Final cart:", shoppingCart);

// This demonstrates that const arrays can be modified (push, pop, update elements)
// but cannot be reassigned to a new array.
