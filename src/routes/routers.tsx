import App from "@/App";
import About from "@/pages/About";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import Createstudent from "@/pages/admin/Createstudent";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <Createstudent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
