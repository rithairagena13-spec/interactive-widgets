export default function TaskSummary({ tasks = [] }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const remaining = total - completed;

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="rounded-2xl bg-[#F4F1E8] p-4">
        <p className="text-xs font-medium text-[#737A72]">
          TOTAL TASKS
        </p>
        <p className="mt-2 text-3xl font-bold text-[#1F302B]">
          {total}
        </p>
      </div>

      <div className="rounded-2xl bg-[#E8F0E9] p-4">
        <p className="text-xs font-medium text-[#315F59]">
          COMPLETED
        </p>
        <p className="mt-2 text-3xl font-bold text-[#315F59]">
          {completed}
        </p>
      </div>

      <div className="rounded-2xl bg-[#FBEDE7] p-4">
        <p className="text-xs font-medium text-[#A64F39]">
          REMAINING
        </p>
        <p className="mt-2 text-3xl font-bold text-[#A64F39]">
          {remaining}
        </p>
      </div>
    </div>
  );
}