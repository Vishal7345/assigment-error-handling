// cart.js
let cart = []; 

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error('Product name is required');
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error('Invalid product price');
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error('Invalid quantity');
  }

  cart.push({ name, price, quantity });
  return 'Product added to cart';
}

// Example usage
try {
  console.log(addToCart('Apple', 1.5, 3)); // Success
  console.log(addToCart('Apple', -1.5, 3)); // Error: Invalid product price
} catch (error) {
  console.error(error.message);
}
