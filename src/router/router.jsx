import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<h2>Sorry,Route Not Fount</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'register',
            element:<Register></Register>,
        },
        {
            path:'signIn',
            element:<SignIn></SignIn>,
        },

    ]
    },
  ]);
  export default router;