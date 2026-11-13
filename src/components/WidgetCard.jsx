export default function WidgetCard({ number, title, description, children }) {
  return (
    <section className="rounded-3xl border border-[#E2DED2] bg-white p-6 shadow-[0_12px_36px_rgba(31,48,43,0.05)]">
      <div className="mb-6 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F1E8] text-sm font-bold text-[#B68C55]">
          {number}
        </span>

        <div>
          <h2 className="text-lg font-bold text-[#1F302B]">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-[#7B8278]">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}