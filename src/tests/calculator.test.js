/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover the four basic arithmetic operations:
 *   - add()      : Addition
 *   - subtract() : Subtraction
 *   - multiply() : Multiplication
 *   - divide()   : Division (including division by zero edge case)
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
