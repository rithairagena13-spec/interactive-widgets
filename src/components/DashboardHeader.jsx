export default function DashboardHeader() {
  return (
    <header className="mb-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F302B] text-lg font-bold text-[#F4F1E8]">
            S
          </div>
          <div>
            <p className="font-bold tracking-tight text-[#1F302B]">
              STATE STUDIO
            </p>
            <p className="text-xs tracking-wide text-[#7B8278]">
              INTERACTIVE WORKSPACE
            </p>
          </div>
        </div>

        <span className="rounded-full border border-[#D9D5C9] px-4 py-2 text-xs font-medium text-[#315F59]">
          REACT 19 · USESTATE
        </span>
      </div>

      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B68C55]">
          Week 7 · State & Event Handling
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-[#1F302B] sm:text-5xl">
          Interactive Widgets
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#737A72]">
          Explore React state through counters, forms, toggles and task
          management. Every interaction updates the interface instantly.
        </p>
      </div>
    </header>
  );
}