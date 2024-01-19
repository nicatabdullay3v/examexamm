import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Basket from "../pages/Basket/Basket";
import Admin from "../pages/Admin/Admin";
import Detail from "../pages/Detail/Detail";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/basket",
      element:<Basket/>,
    },
    {
      path: "/admin",
      element:<Admin/>,
    },
    {
      path: "/:id",
      element:<Detail/>,
    },
  ]);