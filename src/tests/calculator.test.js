/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all arithmetic operations:
 *   - add()        : Addition
 *   - subtract()   : Subtraction
 *   - multiply()   : Multiplication
 *   - divide()     : Division (including division by zero edge case)
 *   - modulo()     : Modulo (including modulo by zero edge case)
 *   - power()      : Exponentiation
 *   - squareRoot() : Square root (including negative number edge case)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add()', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two negative numbers', () => expect(add(-5, -3)).toBe(-8));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds floating-point numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4.0));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract()', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('result is negative when b > a', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (double negative)', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts floating-point numbers', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3.0));
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply()', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies positive and negative numbers', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies two negative numbers yields positive', () => expect(multiply(-4, -4)).toBe(16));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies floating-point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10.0));
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide()', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative by a positive', () => expect(divide(-20, 4)).toBe(-5));
  test('divides two negative numbers yields positive', () => expect(divide(-15, -3)).toBe(5));
  test('dividing zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('division by zero returns an error message', () => {
    expect(divide(5, 0)).toBe('Error: Division by zero is not allowed');
  });
  test('division by zero with negative numerator returns an error message', () => {
    expect(divide(-10, 0)).toBe('Error: Division by zero is not allowed');
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo()', () => {
  // Example from image: 5 % 2 = 1
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));

  test('returns zero when evenly divisible', () => expect(modulo(10, 5)).toBe(0));
  test('modulo with larger divisor returns dividend', () => expect(modulo(3, 7)).toBe(3));
  test('modulo with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('modulo with floating-point numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test('modulo by zero returns an error message', () => {
    expect(modulo(5, 0)).toBe('Error: Modulo by zero is not allowed');
  });
  test('modulo by zero with negative numerator returns an error message', () => {
    expect(modulo(-8, 0)).toBe('Error: Modulo by zero is not allowed');
  });
});

// ─── Power ────────────────────────────────────────────────────────────────────
describe('power()', () => {
  // Example from image: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));

  test('raises a number to the power of zero returns 1', () => expect(power(5, 0)).toBe(1));
  test('raises a number to the power of one returns itself', () => expect(power(7, 1)).toBe(7));
  test('raises a negative base to an even exponent yields positive', () => expect(power(-3, 2)).toBe(9));
  test('raises a negative base to an odd exponent yields negative', () => expect(power(-2, 3)).toBe(-8));
  test('fractional exponent (square root via power)', () => expect(power(9, 0.5)).toBeCloseTo(3));
  test('large exponentiation', () => expect(power(2, 10)).toBe(1024));
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe('squareRoot()', () => {
  // Example from image: √16 = 4
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));

  test('square root of 25 = 5', () => expect(squareRoot(25)).toBe(5));
  test('square root of 0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('square root of 1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('square root of 2 returns irrational number', () => expect(squareRoot(2)).toBeCloseTo(1.4142));
  test('square root of 9 = 3', () => expect(squareRoot(9)).toBe(3));

  // Edge case: negative input
  test('square root of a negative number returns an error message', () => {
    expect(squareRoot(-1)).toBe('Error: Square root of a negative number is not allowed');
  });
  test('square root of a large negative number returns an error message', () => {
    expect(squareRoot(-100)).toBe('Error: Square root of a negative number is not allowed');
  });
});
