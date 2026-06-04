// import { useState } from "react";
// import AuthContext from "../../context/AuthProvider";
// import { useContext } from "react";

// const CreateTask = () => {
//   const [userData, setUserData] = useContext(AuthContext);

//   const [TaskTitle, setTaskTitle] = useState("");
//   const [TaskDesciption, setTaskDesciption] = useState("");
//   const [TaskDate, setTaskDate] = useState("");
//   const [AssignTo, setAssignTo] = useState("");
//   const [category, setcategory] = useState("");

//   const [newTask, setNewTask] = useState({});

//   const submitHandler = (e) => {
//     e.preventDefault();

//     setNewTask({
//       title: TaskTitle,
//       description: TaskDesciption,
//       date: TaskDate,
//       category: category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     });

//     const data = userData ;

//     data.forEach(function (elem) {
//       if (AssignTo == elem.firstName) {
//         elem.tasks.push(newTask);
//         elem.tasksCounts.newTask = elem.tasksCounts.newTask +1;
//       }
//     });
//     setUserData(data);
 
//     setTaskTitle("");
//     setTaskDesciption("");
//     setTaskDate("");
//     setAssignTo("");
//     setcategory("");
//   };

//   return (
//     <div className="max-w-4xl mt-10 mx-auto shadow-black bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
//       <h2 className="text-lg font-semibold text-gray-800 mb-6">
//         Create New Task
//       </h2>

//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <div className="flex gap-8">
//           {/* Left Column */}
//           <div className="flex-1 flex flex-col gap-5">
//             <div className="flex flex-col gap-1.5">
//               <label className="text-sm font-medium text-gray-600">
//                 Task Title
//               </label>
//               <input
//                 value={TaskTitle}
//                 onChange={(e) => {
//                   setTaskTitle(e.target.value);
//                 }}
//                 type="text"
//                 name="title"
//                 placeholder="Make a UI Design"
//                 required
//                 className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
//               />
//             </div>

//             <div className="flex flex-col gap-1.5">
//               <label className="text-sm font-medium text-gray-600">Date</label>
//               <input
//                 value={TaskDate}
//                 onChange={(e) => {
//                   setTaskDate(e.target.value);
//                 }}
//                 type="date"
//                 name="date"
//                 required
//                 className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
//               />
//             </div>

//             <div className="flex flex-col gap-1.5">
//               <label className="text-sm font-medium text-gray-600">
//                 Assign To
//               </label>
//               <input
//                 value={AssignTo}
//                 onChange={(e) => {
//                   setAssignTo(e.target.value);
//                 }}
//                 type="text"
//                 name="assignTo"
//                 placeholder="Employee Name"
//                 required
//                 className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
//               />
//             </div>

//             <div className="flex flex-col gap-1.5">
//               <label className="text-sm font-medium text-gray-600">
//                 Category
//               </label>
//               <input
//                 value={category}
//                 onChange={(e) => {
//                   setcategory(e.target.value);
//                 }}
//                 type="text"
//                 name="category"
//                 placeholder="Design, Dev, Etc"
//                 required
//                 className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex-1 flex flex-col gap-1.5">
//             <label className="text-sm font-medium text-gray-600">
//               Description
//             </label>
//             <textarea
//               value={TaskDesciption}
//               onChange={(e) => {
//                 setTaskDesciption(e.target.value);
//               }}
//               name="description"
//               placeholder="Task description..."
//               rows={10}
//               required
//               className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 transition resize-none"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button
//             type="submit"
//             className="px-6 py-2.5 text-sm font-medium bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
//           >
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;


import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask