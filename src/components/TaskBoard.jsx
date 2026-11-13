import { useState } from 'react';

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function handleAddTask(event) {
    event.preventDefault();

    const title = taskInput.trim();

    if (!title) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setTaskInput('');
  }

  function handleCompleteTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function handleRemoveTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleAddTask} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          placeholder="What needs to be done?"
          className="min-w-0 flex-1 rounded-xl border border-[#D9D5C9] bg-[#FAF9F5] px-4 py-3 text-sm outline-none focus:border-[#315F59]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#315F59] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F302B]"
        >
          + Add task
        </button>
      </form>

      {tasks.length === 0 ? (
        <div className="rounded-2xl bg-[#F4F1E8] p-8 text-center">
          <p className="font-semibold text-[#1F302B]">
            No tasks yet
          </p>
          <p className="mt-2 text-sm text-[#737A72]">
            Add your first task to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-[#E2DED2] p-4"
            >
              <label className="flex min-w-0 items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task.id)}
                  className="h-4 w-4 accent-[#315F59]"
                />

                <span
                  className={`break-words text-sm ${
                    task.completed
                      ? 'text-[#999E94] line-through'
                      : 'font-medium text-[#1F302B]'
                  }`}
                >
                  {task.title}
                </span>
              </label>

              <button
                type="button"
                onClick={() => handleRemoveTask(task.id)}
                className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-[#C56F54] transition hover:bg-[#FBEDE7]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-[#737A72]">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} in your board
      </p>
    </div>
  );
}