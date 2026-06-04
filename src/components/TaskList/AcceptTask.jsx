
const AcceptTask = ({ data }) => {
  return (
     <div className="h-full flex-shrink-0 w-[300px] p-5 rounded-xl bg-yellow-500">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-4 py-1  text-white text-sm rounded-xl">{data.category}</h3>
          <h4 className="text-base">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2.5">
          {data.taskDescription}
        </p>
        <div className="flex justify-between mt-6"> 
            <button className="bg-green-500 text-sm text-white px-2 py-1 rounded-lg">Mark as Completed</button>
            <button className="bg-red-500 text-sm text-white px-2 py-1 rounded-lg">Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
