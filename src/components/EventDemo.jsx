import { useState } from 'react';

export default function EventDemo() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks((previousClicks) => previousClicks + 1);
  }

  function handleReset() {
    setClicks(0);
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-[#F4F1E8] p-5">
        <p className="text-sm text-[#737A72]">
          Button interactions
        </p>

        <p className="mt-2 text-4xl font-bold text-[#315F59]">
          {clicks}
        </p>

        <p className="text-sm text-[#737A72]">
          Times clicked
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClick}
          className="rounded-xl bg-[#315F59] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F302B]"
        >
          Click to interact
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border border-[#D9D5C9] px-5 py-3 text-sm font-semibold text-[#315F59] transition hover:bg-[#F4F1E8]"
        >
          Reset
        </button>
      </div>

      <div className="space-y-3 rounded-2xl border border-[#E2DED2] p-4">
        <p className="text-sm font-semibold text-[#1F302B]">
          Understanding event handlers
        </p>

        <p className="text-sm leading-6 text-[#737A72]">
          <code className="text-[#315F59]">
            onClick={'{handleClick}'}
          </code>
          {' '}passes the function to React to run when clicked.
        </p>

        <p className="text-sm leading-6 text-[#737A72]">
          <code className="text-[#C56F54]">
            onClick={'{handleClick()}'}
          </code>
          {' '}calls the function immediately during rendering.
        </p>
      </div>

      <p className="text-sm leading-6 text-[#737A72]">
        A normal let variable can change after a button click, but React
        does not track that change or automatically re-render the interface.
        State allows React to track changes and update the displayed value.
      </p>
    </div>
  );
}