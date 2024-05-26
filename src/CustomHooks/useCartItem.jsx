/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useState } from "react";
import axios from "axios";

const useCartItem = () => {
   const axiosSecure = useAxios();
   const {user, loading} = useAuth();
  
   const {  data: cart = [] ,refetch, isLoading } = useQuery({
        

    queryKey: ['cartItem', user?.email],
    queryFn: async()=>{
        if(isLoading){
            <p>loading</p>
        }
        const res = await axios.get(`http://localhost:5000/carts?email=${user.email}`);
        // console.log("cart = ", res);
        return res.data
    }

})


    return [cart, refetch];
};

export default useCartItem;