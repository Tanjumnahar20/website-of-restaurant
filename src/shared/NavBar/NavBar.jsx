import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCartItem from "../../CustomHooks/useCartItem";
import useAdmin from "../../CustomHooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(); 
  const [cart] = useCartItem();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {navigate('/login'); })
  }
  
  const navItems = <>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our menu</Link></li>
    <li><Link to='/order/Salad'>Order</Link></li>
    {
      user && isAdmin   &&   <li><Link to='/secret'>Secret</Link></li> 
    }
    </>

    const userMenu = <>
    
    <li>
      <Link to='/dashboard/cart'>
        <FiShoppingCart />
        <div className="badge badge-secondary">+{cart.length}</div>
      </Link>
    </li>


    {
      !user ? <>
        <li><Link to='/login'>Login</Link></li>
      </>
        :
        <>
          
        </>
    }

  </>

  return (
    <div className="navbar fixed z-10 bg-opacity-60  bg-black text-white">
      <div className="container flex justify-between items-center">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Rooftop cafe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        {
          !user ? 
          <button><Link to='/login'>Login</Link></button>
          :
          <div className="navbar-end w-auto flex items-center">
            <ul className="menu menu-horizontal px-1">
              {userMenu}
            </ul>
            <div className="dropdown dropdown-end flex">
              <div tabIndex={0} role="button" className=" m-1 avatar online">
                <div className="w-8 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                  <img src= {user?.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow top-12">
                <li><Link to="/profile" className="btn">{user?.displayName}</Link></li>
                <li><Link to="/dashboard/cart" className="btn">Cart</Link></li>
                <li><button onClick={handleLogOut} className="btn">Logout</button></li>
              </ul>
            </div>
          </div>
        }
        
      </div>
    </div>
  );
};

export default NavBar;