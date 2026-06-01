// import Header from "../other/Header";

// const AdminDashboard = () => {
//   return (
//     <div className="p-10 h-screen w-full ">
//       <Header />
//       <div>
//         <form className="flex w-full flex-wrap bg-amber-950  items-start justify-between">
//           <div className="w-1/2">
//             <div>
//               <h3>TaSK Title</h3>
//               <input type="text" placeholder="Make a Ui Design" />
//             </div>

//             <div>
//               <h3>Date</h3>
//               <input type="date" />
//             </div>

//             <div>
//               <h3>Assign To</h3>
//               <input type="text" placeholder="Employee Name" />
//             </div>
//             <div>
//               <h3>Category</h3>
//               <input type="text" placeholder="Design, Dev,  Etc" />
//             </div>
//           </div>

//           <div className="w-1/2">
//             <h3>Description</h3>
//             <textarea name="" id="" cols="20" rows="10"></textarea>
//           </div>

//           <button>Create Task</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashboard = () => {
  return (
    <div className="p-10 min-h-screen w-full bg-gray-50">
      <Header />
      <CreateTask/>
      <AllTask/>

    
    </div>
  );
};

export default AdminDashboard;
