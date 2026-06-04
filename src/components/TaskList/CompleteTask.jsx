
const CompleteTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 rounded-xl bg-blue-500">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-4 py-1  text-white text-sm rounded-xl">{data.category}</h3>
          <h4 className="text-base">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2.5">
          {data.taskDescription}
        </p>
        <div className="mt-4">
          <button className='w-full'>Complete Task</button>
        </div>
      </div>
  )
}

export default CompleteTask
