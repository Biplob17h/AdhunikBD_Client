import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import UserDashBoard from "../Pages/UserDashBoard/UserDashBoard";
import DashboardProfilePage from "../Pages/UserDashBoard/DashboardProfilePage";
import DashboardOrderPage from "../Pages/UserDashBoard/DashboardOrderPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signUp", element: <SignUp></SignUp> }

    ],
  },
  {
    path : "/dashboard/user",
    element : <UserDashBoard></UserDashBoard>,
    children : [
      {
        path : '/dashboard/user/profile',
        element : <DashboardProfilePage></DashboardProfilePage>
      },
      {
        path : '/dashboard/user/order',
        element : <DashboardOrderPage></DashboardOrderPage>
      },
    ]
  }
]);

export default routes;
