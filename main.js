// Simple interest (單利)
function calSimpleInterest(deposit, interestRate, years) {
    return deposit * interestRate * years;
}

// Compound interest (複利)
function calCompoundInterest(deposit, interestRate, years) {
    return deposit * Math.pow((1 + interestRate), years) - deposit;
}