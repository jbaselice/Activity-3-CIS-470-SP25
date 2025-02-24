const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
  test('should classify an Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('should return error for invalid inputs', () => {
    expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('should return "Not a Triangle" for invalid triangle sides', () => {
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });

  //Robust Boundary Value Test Cases
  test('Minimum Equilateral', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
  });

  test('Maximum Equilateral', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
  });

  test('Min Edge Case Equilateral', () => {
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
  });

  test('Max Edge Case Equilateral', () => {
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
  });

  test('Maximum Isosceles', () => {
      expect(classifyTriangle(199, 200, 200)).toBe('Isosceles');
  });

  test('Max Edge Case Isosceles', () => {
      expect(classifyTriangle(200, 199, 199)).toBe('Isosceles');
  });

  test('Minimum Isosceles', () => {
      expect(classifyTriangle(1, 2, 2)).toBe('Isosceles');
  });

  test('Mid Isosceles', () => {
      expect(classifyTriangle(100, 100, 150)).toBe('Isosceles');
  });

  //Weak Normal Equivalence Class Test Cases
  test('Equivalence Class Equilateral', () => {
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
  });

  test('Equivalence Class Isosceles', () => {
      expect(classifyTriangle(50, 50, 40)).toBe('Isosceles');
  });

  test('Equivalence Class Scalene', () => {
      expect(classifyTriangle(40, 50, 60)).toBe('Scalene');
  });

  test('Equivalence Class Not a Triangle', () => {
      expect(classifyTriangle(50, 10, 10)).toBe('Not a Triangle');
  });

  test('Large Isosceles', () => {
      expect(classifyTriangle(180, 180, 100)).toBe('Isosceles');
  });

  test('Large Scalene', () => {
      expect(classifyTriangle(180, 170, 160)).toBe('Scalene');
  });

  test('Large Not a Triangle', () => {
      expect(classifyTriangle(200, 100, 50)).toBe('Not a Triangle');
  });

  test('Small Isosceles', () => {
      expect(classifyTriangle(10, 10, 15)).toBe('Isosceles');
  });

  test('Small Scalene', () => {
      expect(classifyTriangle(10, 12, 15)).toBe('Scalene');
  });

  test('Medium Isosceles', () => {
      expect(classifyTriangle(75, 75, 50)).toBe('Isosceles');
  });

  test('Medium Scalene', () => {
      expect(classifyTriangle(80, 90, 100)).toBe('Scalene');
  });
  
  test("Medium Equilateral", () => {
    expect(classifyTriangle(100, 100, 100)).toBe("Equilateral");
  });
});
