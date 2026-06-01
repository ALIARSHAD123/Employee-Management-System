const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create admin dashboard UI in React.",
        taskDate: "2026-06-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar responsiveness issue.",
        taskDate: "2026-05-28",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate user API with frontend.",
        taskDate: "2026-05-25",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build login page with validation.",
        taskDate: "2026-06-02",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement theme switcher.",
        taskDate: "2026-06-03",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Git Repo",
        taskDescription: "Initialize and push project.",
        taskDate: "2026-05-20",
        category: "DevOps",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Create tests for authentication.",
        taskDate: "2026-06-04",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported UI bugs.",
        taskDate: "2026-05-30",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy application to production.",
        taskDate: "2026-05-29",
        category: "Deployment",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Design",
        taskDescription: "Create MongoDB collections.",
        taskDate: "2026-06-05",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "User Roles",
        taskDescription: "Implement role-based access.",
        taskDate: "2026-06-06",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write API documentation.",
        taskDate: "2026-05-27",
        category: "Documentation",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Develop user profile section.",
        taskDate: "2026-06-07",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize assets.",
        taskDate: "2026-05-26",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate payment service.",
        taskDate: "2026-05-24",
        category: "Integration",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(admin,employees)
  
};
