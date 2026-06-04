import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-14 bg-gray-50 h-screen">
      <Header ChangeUser={props.ChangeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
  