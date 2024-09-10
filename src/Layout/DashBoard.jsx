import { FaBook, FaCalendar, FaCartPlus, FaHome, FaList, FaListUl, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { MdMenu, MdOutlinePayment, MdReviews } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCartItem from "../CustomHooks/useCartItem";
import useAdmin from "../CustomHooks/useAdmin";


const DashBoard = () => {
  const [cart] = useCartItem();
   const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu">
           {
            isAdmin ? <>
                 <li>
                <NavLink to='/dashboard/adminhome'>
                    <FaHome></FaHome>
                    Admin Home
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/addItems'>
                    <FaUtensils></FaUtensils>
                    Add items
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/manageItems'>
                <FaListUl />

                    Manage Items
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/bookings'>
                    <FaBook></FaBook>
                    Manage bookings</NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/users'>
                <FaUsers />

                    All users</NavLink>
              </li>
               
            </>
            :
            <>
                 <li>
                <NavLink to='/dashboard/userhome'>
                    <FaHome></FaHome>
                    User Home
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/reserve'>
                    <FaCalendar></FaCalendar>
                    Reservation
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/cart'>
                    <FaCartPlus></FaCartPlus>
                    my cart({cart.length})
                    </NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/review'>
                <MdReviews />

                    review</NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/payment'>
                <MdOutlinePayment />

                    payment</NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/booking'>
                <LuBookCopy/>

                    bookings</NavLink>
              </li>
                <li>
                <NavLink to='/dashboard/paymentHistory'>
                <FaList/>

                    Payment history</NavLink>
              </li>
            </>
           }
              {/* shared list */}
              <div className="divider px-5"></div> 
              <li>
                <NavLink to='/'>
                    <FaHome></FaHome>
                     Home
                    </NavLink>
              </li>
              <li>
                <NavLink to='/menu'>
                <MdMenu />

                     menu
                    </NavLink>
              </li>
              <li>
                <NavLink to='/shop'>
                <FaBagShopping />

                     shop
                    </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                <RiContactsBook3Fill />

                     contact
                    </NavLink>
              </li>
              </ul>

            </div>

            <div className="flex-1">
           <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
