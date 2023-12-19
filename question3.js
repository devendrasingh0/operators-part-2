function checkNumber(num) {
    return num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
  }
  
  const number = 10; // Change this to test different values
  
  console.log(checkNumber(number));
  