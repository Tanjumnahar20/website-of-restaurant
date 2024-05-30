import { FaGoogle } from "react-icons/fa";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            console.log('social login',result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div>
           <div>
           <button onClick={handleGoogleLogin} className="btn">
  <FaGoogle></FaGoogle>
   Google
</button>
            </div> 
        </div>
    );
};

export default SocialLogin;