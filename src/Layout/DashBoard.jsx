import { FaCalendar, FaCartPlus, FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { MdMenu, MdOutlinePayment, MdReviews } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCartItem from "../CustomHooks/useCartItem";


const DashBoard = () => {
  const [cart] = useCartItem()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu">
                <li>
                <NavLink to='/dashboard/home'>
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
