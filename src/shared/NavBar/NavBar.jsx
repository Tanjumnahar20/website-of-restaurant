import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCartItem from "../../CustomHooks/useCartItem";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCartItem();
  // console.log('navbar',cart.length);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
  }

  const navItems = <>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our menu</Link></li>
    <li><Link to='/order/Salad'>Order</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li>
      <Link to='/dashboard'>
      <FiShoppingCart />
 <div className="badge badge-secondary">+{cart.length}</div>
</Link>
    </li>


    {
      user ? <>
        <button onClick={handleLogOut} className="btn btn-active btn-ghost">log out</button>

      </>
        :
        <>
          <li><Link to='/login'>Login</Link></li>
        </>
    }

  </>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Rooftop cafe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">{user?.email}</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;