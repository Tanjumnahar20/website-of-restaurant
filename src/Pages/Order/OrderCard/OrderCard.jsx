/* eslint-disable no-unused-vars */

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../CustomHooks/useAxios";
import axios from "axios";
import useCartItem from "../../../CustomHooks/useCartItem";

const OrderCard = ({item}) => {
  const {user,loading } = useAuth();
    const {name,recipe,image,price, _id} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [,refetch] = useCartItem();
    const handleAddToCart= (item) =>{

      if(user && user.email){
       const cartItem ={
        menuId: _id,
        name,
        price,
        image,
         email: user.email
       }
      axiosSecure.post('/carts', cartItem)
       .then(res=>{
        // console.log(res.data);
         if(res.data.insertedId){
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
         
          //  refetch cart to count item
          refetch();
        }
        })
      }
        else{
          Swal.fire({
            title: "Please, login!",
            text: "login ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "login now!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from:location}})
            }
          });
          
        }
    }

    return (
        <div className="card card-compact w-[300px] h[250px] bg-base-100 shadow-xl">
        <figure><img className="" src={image} alt="food" /></figure>
          <p className="bg-black text-white absolute right-0 mr-5 mt-5 px-5">{price}</p>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center mb-12">
           <Link to=''>
           <button 
           onClick={()=>handleAddToCart(item)}
            className="btn btn-primary btn-outline border-0 border-b-4">Add to cart</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;