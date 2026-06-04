import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div id="alltask" className="bg-gray-100 p-5 rounded mt-5 ">

  <div className="bg-slate-800 mb-2 py-4 px-5 flex justify-between rounded">
    <h2 className="text-lg font-medium w-1/5 text-white">Employee Name</h2>
    <h3 className="text-lg font-medium w-1/5 text-white">New Task</h3>
    <h4 className="text-lg font-medium w-1/5 text-white">Active Task</h4>
    <h4 className="text-lg font-medium w-1/5 text-white">Completed</h4>
    <h4 className="text-lg font-medium w-1/5 text-white">Failed</h4>
  </div>

  <div className="h-[80%] overflow-auto">
    {userData.map(function (elem,idx) {
      return (
        <div key={idx} className="bg-white mb-2 py-4 px-5 flex justify-between rounded">
          <h2 className="text-lg font-medium  w-1/5 text-gray-800">{elem.firstName}</h2>
          <h3 className="text-lg font-medium  w-1/5 text-blue-500">{elem.taskCounts.newTask}</h3>
          <h4 className="text-lg font-medium  w-1/5 text-yellow-600">{elem.taskCounts.active}</h4>
          <h4 className="text-lg font-medium  w-1/5 text-green-600">{elem.taskCounts.completed}</h4>
          <h4 className="text-lg font-medium  w-1/5 text-orange-500">{elem.taskCounts.failed}</h4>
        </div>
      );
    })}
  </div>

</div>



  );
};

export default AllTask;




