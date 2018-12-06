// Aquí voy a escribir mis tests

// 1.Primero necesito agregar mi módulo

const {
  add, 
  divide,
  operate,
  multiply,
  rest,
} = require('./calculator');

// Esta calculadora va a hacer las funciones básicas
// suma resta, multiplicación división

describe('add, suma de dos números', () => {
  test('suma de 3, 2', () => {
    expect(add(3, 2)).toBe(5);
  });
  test('suma de 5, 3', () => {
    expect(add(5, 3)).toBe(8);
  });
  test('suma de -5, 10', () => {
    expect(add(-5, 10)).toBe(5);
  });
});


describe('divide, divide dos números', () => {
  test('divide de 3, 2', () => {
    expect(divide(3, 2)).toBe(1.5)
  });
  test('divide de 5, - 3', () => {
    expect(divide(5, 3)).toBe(1.6666666666666667);
  });
  test('divide de -5, 10', () => {
    expect(divide(-5, 10)).toBe(-0.5);
  });
  test('divide de 4, 0', () => {
    expect(divide(4, 0)).toBe(Infinity);
  });
});

describe('multiply, multiplica dos números', () => {
  test('multiply de 3, 2', () => {
    expect(multiply(3, 2)).toBe(6)
  });
  test('multiply de 5, - 3', () => {
    expect(multiply(5, - 3)).toBe(-15);
  });
  test('multiply de -5, 10', () => {
    expect(multiply(-5, 10)).toBe(-50);
  });
});

describe('rest, resta de dos números', () => {
  test('resta de 3, 2', () => {
    expect(rest(3, 2)).toBe(1);
  });
  test('resta de 5, - 3', () => {
    expect(rest(5, 3)).toBe(2);
  });
  test('resta de -5, 10', () => {
    expect(rest(-5, 10)).toBe(-15);
  });
});

describe('operate, dada la operación y dos números, ejecuta la operación correspondiente', () => {
  test('operate add de 100, 50', () => {
    expect(operate('add', 100, 50)).toBe(150);
  });
  test('operate rest de 100, 50', () => {
    expect(operate('rest', 100, 50)).toBe(50);
  });
  test('operate divide de 100, 50', () => {
    expect(operate('divide', 100, 50)).toBe(2);
  });
  test('operate multiply de 100, 50', () => {
    expect(operate('multiply', 100, 50)).toBe(5000);
  });
  function testUnknown() {
    operate('unknown', 100, 50);
  }
  test('operate unknown de 100, 50', () => {
    expect(testUnknown).toThrowError('Unexpected operation. We dont support operation unknown.');
  });
});
