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
import AllUser from "../Pages/Dashboard/AllUser";
import Additems from "../Pages/Dashboard/Additems/Additems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Payment from "../Pages/Dashboard/Payment/Payment";

     export const router = createBrowserRouter([
            {
              path: "/",
              element: <Main></Main>,
              children:[
                // user route
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
               },
               {
                path:'/dashboard/userhome',
                element:<UserHome></UserHome>
               }
              ]
            },
            // admin route
            {
              path:'dashboard',
              element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
              children: [
                {
                  path:'cart',
                  element:<Cart></Cart>
                },
                {
                  path: '/dashboard/payment',
                  element:<Payment></Payment>
                },
                
                {
                  path:'users',
                  element:<AdminRoute><AllUser></AllUser></AdminRoute>
                },
                {
                  path:'manageItems',
                  element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
                },
                {
                  path:'updateItem/:id',
                  element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                  loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)

                },
                {
                  path:'addItems',
                  element:<AdminRoute><Additems></Additems></AdminRoute>
                },
                {
                  path:'/dashboard/adminhome',
                  element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
                }
              ]
            }
          ]);
