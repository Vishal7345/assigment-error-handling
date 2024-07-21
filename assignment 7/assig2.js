// Mock data for valid credentials
const validCredentials = {
    username: 'user1',
    password: 'password123'
  };
  
  // Function to simulate the login process
  function login(username, password) {
    // Check if the username is provided
    if (!username) {
      throw new Error('Username is required');
    }
    
    // Check if the password is provided
    if (!password) {
      throw new Error('Password is required');
    }
  
    // Validate the credentials
    if (username !== validCredentials.username || password !== validCredentials.password) {
      throw new Error('Invalid username or password');
    }
  
    // If credentials are valid, return a success message
    return 'Login successful';
  }
  
  // Example usage
  try {
    console.log(login('user1', 'password123')); // Output: Login successful
    console.log(login('', 'password123'));      // Throws error: Username is required
    console.log(login('user1', ''));            // Throws error: Password is required
    console.log(login('user1', 'wrongpassword')); // Throws error: Invalid username or password
  } catch (error) {
    console.error(error.message);
  }

