import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order/order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";

     export const router = createBrowserRouter([
            {
              path: "/",
              element: <Main></Main>,
              children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                  path:'/menu',
                  element:<Menu></Menu>
                },
                {
                  path:'order/:category',
                  element:<Order></Order>
                },
                {
                  path:'login',
                  element:<Login></Login>
                },
               {
                path:'signup',
                element:<SignUp></SignUp>
               },
               {
                path:'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
               }
              ]
            },
            {
              path:'dashboard',
              element:<DashBoard></DashBoard>,
              children: [
                {
                  path:'cart',
                  element:<Cart></Cart>
                }
              ]
            }
          ]);
