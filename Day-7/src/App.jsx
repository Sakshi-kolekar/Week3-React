import { useState } from 'react'

function TaskForm({ task, setTask, addTask }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
      >
        + Add Task
      </button>
    </form>
  )
}

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-3">📋</div>
        <p className="text-slate-700 font-semibold">
          No tasks added yet
        </p>
        <p className="text-slate-400 text-sm mt-1">
          Add a task to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl hover:shadow-sm transition"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(item.id)}
              className="w-5 h-5 accent-blue-600"
            />

            <span
              className={`font-medium ${
                item.completed
                  ? 'line-through text-slate-400'
                  : 'text-slate-700'
              }`}
            >
              {item.text}
            </span>
          </div>

          <button
            onClick={() => deleteTask(item.id)}
            className="text-red-500 border border-red-200 px-3 py-1.5 rounded-lg text-sm hover:bg-red-50 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false
      }
    ])

    setTask('')
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  const completedTasks = tasks.filter(
    (item) => item.completed
  ).length

  const pendingTasks = tasks.length - completedTasks

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="bg-slate-950 px-4 py-10">
        <div className="max-w-2xl mx-auto text-center">

          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            React Mini Project
          </div>

          <h1 className="text-4xl font-extrabold text-white">
            Task Tracker
          </h1>

          <p className="text-slate-400 mt-2">
            Plan your work. Track your progress.
          </p>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6">

          <TaskForm
            task={task}
            setTask={setTask}
            addTask={addTask}
          />

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 mt-6 mb-7">

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">
                {tasks.length}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                TOTAL
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {pendingTasks}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                PENDING
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-green-600">
                {completedTasks}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                COMPLETED
              </p>
            </div>

          </div>

          {/* Tasks Heading */}
          <div className="flex justify-between items-center mb-4">

            <h2 className="text-lg font-bold text-slate-800">
              My Tasks
            </h2>

            <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {tasks.length} Tasks
            </span>

          </div>

          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Built with React • Tailwind CSS
        </p>

      </div>

    </div>
  )
}

export default App