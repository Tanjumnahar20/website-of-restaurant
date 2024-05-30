/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import {  Helmet } from 'react-helmet-async';

import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const {createUser,updateProfileUser} = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateProfileUser(data.name, data.photoUrl)
      .then(()=>{
        const userInfo ={
          name:data.name,
          email:data.email
        }
        // user info entry in mongodb
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user added to the db');
            reset();
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
            navigate('/');
          }
        })
       
      })
      .catch(error=>console.log(error))
    })

  }


    return (
      <>
         <Helmet>
        <title>Rooftop//signup </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

              <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })}  name="name" placeholder="name" className="input input-bordered" required />
                {errors.name && <span className="text-red-500">This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text"  {...register("photoUrl", { required: true })}  placeholder="photoUrl" className="input input-bordered" required />
                {errors.photo && <span className="text-red-500">This field is required</span>}

              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })}  name="email" placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-500">This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", { required: true,
                   minLength: 8,
                    maxLength: 15,
                     }, )}   placeholder="password" className="input input-bordered" required />

                {/* {errors.password && <span className="text-red-500">This field is required</span>} */}
                {errors.password?.type === "minLength" && (
        <p className="text-red-600" role="alert">8 required</p>
      )}
                {/* {errors.password?.type === "pattern" && (
        <p className="text-red-600" role="alert">must have one special case letter</p>
      )} */}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <p><small>Already have an account? <Link to="/login">login</Link>  </small></p>
              <SocialLogin> </SocialLogin>

            </form>
          </div>
        </div>
      </div>

      </>
    );
};

export default SignUp;