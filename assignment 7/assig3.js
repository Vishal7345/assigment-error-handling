// Function to validate credit card number (basic Luhn algorithm implementation)
function isValidCardNumber(cardNumber) {
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
  }
  
  // Function to validate expiration date
  function isValidExpirationDate(expirationDate) {
    const [month, year] = expirationDate.split('/').map(Number);
    const now = new Date();
    const expiry = new Date(`20${year}`, month - 1);
  
    return expiry > now;
  }
  
  // Function to simulate the payment processing
  function processPayment(amount, cardNumber, expirationDate) {
    // Check if the payment amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid payment amount');
    }
  
    // Check if the card number is provided and valid
    if (!cardNumber || !isValidCardNumber(cardNumber)) {
      throw new Error('Invalid card number');
    }
  
    // Check if the expiration date is provided and valid
    if (!expirationDate || !isValidExpirationDate(expirationDate)) {
      throw new Error('Invalid expiration date');
    }
  
    // If all validations pass, return a success message
    return 'Payment processed successfully';
  }
  
  // Example usage
  try {
    console.log(processPayment(100, '1234567812345678', '12/25')); // Output: Payment processed successfully
    console.log(processPayment(-50, '1234567812345678', '12/25')); // Throws error: Invalid payment amount
    console.log(processPayment(100, '1234', '12/25'));             // Throws error: Invalid card number
    console.log(processPayment(100, '1234567812345678', '12/20')); // Throws error: Invalid expiration date
  } catch (error) {
    console.error(error.message);
  }
  