#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   +  Addition
 *   -  Subtraction
 *   *  Multiplication
 *   /  Division
 *
 * Usage:
 *   node src/calculator.js <operand1> <operator> <operand2>
 *
 * Examples:
 *   node src/calculator.js 10 + 5   => 15
 *   node src/calculator.js 10 - 3   => 7
 *   node src/calculator.js 4 * 6    => 24
 *   node src/calculator.js 10 / 2   => 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Returns an error message if b is zero
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero is not allowed';
  }
  return a / b;
}

// Run as CLI when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: node src/calculator.js <operand1> <operator> <operand2>');
    console.error('Supported operators: + - * /');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  let result;

  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    default:
      console.error(`Error: Unsupported operator "${operator}". Use +, -, *, or /`);
      process.exit(1);
  }

  console.log(result);
}

module.exports = { add, subtract, multiply, divide };
