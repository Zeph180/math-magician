import operate from './operate';

describe('operate module', () => {
  test('add 4 + 2 to equal 6', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });

  test('subtract 4 - 1 to equal 3', () => {
    expect(operate(4, 1, '-')).toBe('3');
  });

  test('multiply 2 * 2 to equal 6', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('divide 4 ÷ 2 to equal 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('modulus 5 % 2 to equal 1', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });

  test('Not allowed', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });
});
