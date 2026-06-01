const TaskListNumber = () => {
  return (
    <div className="flex w-full mt-9 justify-between gap-5">
      <div className="rounded-xl  px-5 py-7 w-[45%]  bg-blue-500">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl  px-5 py-7 w-[45%] bg-emerald-500">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl  px-5 py-7 w-[45%] bg-green-500">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl  px-5 py-7 w-[45%] bg-yellow-500">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
