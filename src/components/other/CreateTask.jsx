
const CreateTask = () => {
  return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Create New Task
        </h2>

        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>
              <input
                type="text"
                placeholder="Design, Dev, Etc"
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
              placeholder="Task description..."
              rows={10}
              className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition resize-none"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2.5 text-sm font-medium bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
            Create Task
          </button>
        </div>
      </div>
  )
}

export default CreateTask
