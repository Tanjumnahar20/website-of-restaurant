import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: 'https://website-of-restaurant-server.vercel.app'
})

const useAxios = () => {

   const navigate = useNavigate();
   const {logOut} =useAuth(); 

    // request interceptor to add authorization header for secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by config', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        // Do something with the error
        error => {
            return Promise.reject(error)
        }
    )


    // interceptor error 401, 403

    axiosSecure.interceptors.response.use(response => {
        return response
    },
      useEffect(()=>{
        async (error) => {
            const status = error.response.status;
            // console.log('error in the interceptor', status);
            // for error 
            if (status === 401 || status === 403) {
                await logOut();
                    navigate('/login');
            }
            return Promise.reject(error)
        }
      })

    )
    return axiosSecure;


};

export default useAxios;