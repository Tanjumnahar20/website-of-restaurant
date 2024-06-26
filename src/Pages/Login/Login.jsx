/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2'

import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  Helmet } from 'react-helmet-async';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../CustomHooks/useAuth';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?. from?.pathname || '/';

    // to get the value in captcha field

    const captchaRef = useRef(null);

    const [captchaVerified, setCaptchaVerified] = useState(false);

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                // console.log('signin user',user);
                Swal.fire({
                    title: "login successful",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });

                  navigate(from, {replace:true})
                  
            })
    }

    // const handleValidation = () => {
    //     const userCaptchaValue = captchaRef.current.value;
    //     if (validateCaptcha(userCaptchaValue)) {
    //         setCaptchaVerified(true)
    //         alert('captcha verified')
    //     }
    // }

   

    return (
       <>

<Helmet>
        <title>Rooftop//login </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* <div className="form-control">
                            <input type="text" ref={captchaRef} name="captcha" placeholder="type the text" className="input input-bordered" required />
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text text-blue-800">Verify</span>
                                    <input onClick={handleValidation} type="checkbox" onChange={handleValidation} className="checkbox checkbox-success" />
                                </label>
                            </div>

                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p><small>New here? <Link to="/signup">sign up</Link>  </small></p>
                        <SocialLogin></SocialLogin>

                    </form>
                </div>
                <div className="text-center  md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

            </div>
        </div>
       </>
    );
};

export default Login;

