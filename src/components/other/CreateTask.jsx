import { useState } from "react";

const CreateTask = () => {
  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDesciption, setTaskDesciption] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title: TaskTitle,
      description: TaskDesciption,
      date: TaskDate,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach(function (elem) {
      if (AssignTo == elem.firstName) {
        elem.tasks.push(newTask);
        console.log(elem)
      }
    });

    setTaskTitle("");
    setTaskDesciption("");
    setTaskDate("");
    setAssignTo("");
    setcategory("");
  };

  return (
    <div className="max-w-4xl mt-10 mx-auto shadow-black bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Create New Task
      </h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Task Title
              </label>
              <input
                value={TaskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                name="title"
                placeholder="Make a UI Design"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">Date</label>
              <input
                value={TaskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                name="date"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Assign To
              </label>
              <input
                value={AssignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                type="text"
                name="assignTo"
                placeholder="Employee Name"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                type="text"
                name="category"
                placeholder="Design, Dev, Etc"
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              value={TaskDesciption}
              onChange={(e) => {
                setTaskDesciption(e.target.value);
              }}
              name="description"
              placeholder="Task description..."
              rows={10}
              required
              className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition resize-none"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 text-sm font-medium bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
