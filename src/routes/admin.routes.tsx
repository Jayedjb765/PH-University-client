import AdminDashboard from "@/pages/admin/AdminDashboard";
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import Createstudent from "@/pages/admin/Createstudent";

export const adminroutes2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Sttudent",
        path: "/admin/create-student",
        element: <Createstudent />,
      },
      {
        name: "Create Facuty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <Createstudent />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
];
