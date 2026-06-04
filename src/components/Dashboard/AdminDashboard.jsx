

import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashboard = (props) => {
  return (
    <div className="p-10 min-h-screen w-full bg-gray-50">
      <Header ChangeUser={props.ChangeUser} />
      <CreateTask/>
      <AllTask/>

    
    </div>
  );
};

export default AdminDashboard;
