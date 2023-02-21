export default function Calculator() {
  const nums = ['Ac', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section id="calc">
      <input
        type="text"
        value="0"
        disabled
        id="out"
      />
      <section id="input-sec">
        <article id="numbers">
          {
            nums.map((num) => <button key={num} type="button">{num}</button>)
          }
        </article>
      </section>
    </section>
  );
}
