import { useState } from 'react';

export default function CounterWidget() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrease() {
    setCount((previousCount) => Math.max(0, previousCount - 1));
  }

  function reset() {
    setCount(0);
  }

  function increaseByThree() {
    setCount((previousCount) => previousCount + 3);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-[#1F302B] p-8 text-center">
        <p className="text-sm font-medium text-[#C6C9BC]">
          CURRENT COUNT
        </p>

        <h3 className="mt-3 text-6xl font-bold text-[#F4F1E8]">
          {count}
        </h3>

        <p className="mt-3 text-sm text-[#C6C9BC]">
          Your counter value
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={increase}
          className="rounded-xl bg-[#315F59] px-4 py-3 font-semibold text-white transition hover:bg-[#1F302B]"
        >
          +1 Increase
        </button>

        <button
          type="button"
          onClick={decrease}
          disabled={count === 0}
          className="rounded-xl bg-[#F4F1E8] px-4 py-3 font-semibold text-[#1F302B] transition hover:bg-[#E2DED2] disabled:cursor-not-allowed disabled:opacity-40"
        >
          -1 Decrease
        </button>

        <button
          type="button"
          onClick={reset}
          className="rounded-xl border border-[#D9D5C9] px-4 py-3 font-semibold text-[#737A72] transition hover:bg-[#F4F1E8]"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={increaseByThree}
          className="rounded-xl bg-[#B68C55] px-4 py-3 font-semibold text-white transition hover:bg-[#967044]"
        >
          +3 Increase
        </button>
      </div>
    </div>
  );
}