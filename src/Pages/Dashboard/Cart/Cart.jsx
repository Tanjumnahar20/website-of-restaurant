import Swal from "sweetalert2";
import useAxios from "../../../CustomHooks/useAxios";
import useCartItem from "../../../CustomHooks/useCartItem";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCartItem();
    const axiosSecure = useAxios();
    const totalPrice = cart.reduce((total,item)=>total + item.price,0);

    const handleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          axiosSecure.delete(`/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount>0){
              refetch()
               Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
        }
      });
      
    }
    return (
        <div>
            <div className="mt-6 flex justify-evenly py-8">
            <h2 className="text-3xl">total items:{cart.length}</h2>
            <h2 className="text-3xl">total price:{totalPrice}</h2>
{          cart.length ?  <Link to='/dashboard/payment'><button className="btn btn-orange">pay</button></Link>
:
<Link  to='/dashboard/payment'><button disabled className="btn btn-orange">pay</button></Link>
}            </div>
            <div className="overflow-x-auto px-9">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
         Item Image
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
        {
            cart.map((item,index)=><tbody key={item._id}>
                <tr>
                 <th>
                  {index+1}
                 </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg"><RiDeleteBin6Fill className="text-red-600"/>
                   </button>
                  </th>
                </tr>
               
              </tbody>)
        }
    
   </table>
</div>
        </div>
    );
};

export default Cart;
