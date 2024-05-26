import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    // console.log(location);
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           {isLogin || <NavBar></NavBar>}
            <Outlet></Outlet>
           {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;