// Simple interest (單利)
function calSimpleInterest(deposit, interestRate, years) {
  return deposit * interestRate * years;
}

// Compound interest (複利)
function calCompoundInterest(deposit, interestRate, years) {
  return deposit * Math.pow((1 + interestRate), years) - deposit;
}

/**
 * Count the number of bit 1 in a number.
 * 
 * @param {number} num - The number to be counted.
 * @param {number} bit - The bit of the number.
 * @return {number} The number of bit 1.
 */
function countBitHammingWeight(num, bit) {
  let count = 0;
  const mask = 1;
  for (i = 0; i < bit; i++) {
    if ((mask & num) != 0) {
      count++;
    }
    num >>= 1;
  }
  return count;
}