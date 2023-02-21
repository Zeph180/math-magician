import { useState } from 'react';
import calculate from '../logic/calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

export default function Calculator() {
  const [output, setOutput] = useState(obj);

  const nums = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const handleBtnClick = (e) => {
    const btn = e.target.name;
    return setOutput(calculate(output, btn));
  };

  const screen = (item) => {
    if ((!item.total) && (!item.next)) {
      return '0';
    }
    if (!item.total) {
      return item.next;
    }
    if (item.next && item.total && item.operation) {
      return item.next;
    }
    return item.total;
  };

  return (
    <section id="calc">
      <input
        type="text"
        value={screen(output)}
        disabled
        id="out"
      />
      <section id="input-sec">
        <article id="numbers">
          {
            nums.map((num) => (
              <button
                key={num}
                type="button"
                name={num}
                onClick={handleBtnClick}
              >
                {num}
              </button>
            ))
          }
        </article>
      </section>
    </section>
  );
}
