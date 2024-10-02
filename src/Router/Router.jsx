import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import User from "../Components/Pages/User/User";
import StudentPortal from "@/Components/Pages/StudentPortal/StudentPortal";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/profile',
          element:<User/>
        },
        {
          path:'/student-portal',
          element:<StudentPortal/>
        }
      ]
    },
  ]);