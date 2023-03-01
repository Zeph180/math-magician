import calculate from './calculate';

describe('Calculate', () => {
  test('AC button functionality', () => {
    const obj = {
      total: '2',
      next: '9',
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toStrictEqual({ next: null, operation: null, total: null });
  });

  test('Equals btn returns the results', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '4' });
  });

  test('. button', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({ next: '5.', operation: null, total: null });
  });

  test('Addition button', () => {
    const obj = {
      total: null,
      next: '8',
      operation: null,
    };
    expect(calculate(obj, '+')).toStrictEqual({ next: null, operation: '+', total: '8' });
  });

  test('+/- function', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toStrictEqual({ next: '-9', operation: null, total: null });
  });
});
