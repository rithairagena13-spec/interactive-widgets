import { useState } from 'react';

export default function ToggleWidget() {
  const [showMessage, setShowMessage] = useState(false);

  function handleToggle() {
    setShowMessage((previousState) => !previousState);
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-[#F4F1E8] p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#B68C55]">
          Message visibility
        </p>

        {showMessage ? (
          <p className="mt-4 text-lg font-semibold text-[#315F59]">
            Every small action creates progress.
          </p>
        ) : (
          <p className="mt-4 text-sm text-[#737A72]">
            Your message is currently hidden.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleToggle}
        className="rounded-xl bg-[#315F59] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F302B]"
      >
        {showMessage ? 'Hide message' : 'Show message'}
      </button>
    </div>
  );
}