/* eslint-disable no-undef */
import { RiDeleteBin6Fill } from "react-icons/ri";
import useMenu from "../../../CustomHooks/useMenu";
import SectionTtle from "../../../components/SectionTitle/SectionTtle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../CustomHooks/useAxios";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxios();

    const handleDeleteItem =(item)=>{
           
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then (async(result) => {
        if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data);
          if(res.data.deletedCount>0){
             refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          }
        }
      });  
       
    }

    return (
        <div>
            <SectionTtle subHeading={"Hurry up"} heading={"Manage all items"}></SectionTtle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
        {
            menu.map((item,index) =>  <tbody key={item._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td><img className="h-12 w-12" src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td className="text-right">
                  ${item.price}
                  </td>
                  <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button   className="btn btn-ghost btn-lg"><FaEdit className="text-orange-400" />
                  </button>
                  </Link>
                  </td>
                  <td>
                  <button onClick={()=> handleDeleteItem(item)} className="btn btn-ghost btn-lg"><RiDeleteBin6Fill className="text-red-600" />
                  </button>
                  </td>
                </tr>
               
               
              </tbody>)
        }
      {/* row 1 */}
   
  </table>
</div>
        </div>
    );
};

export default ManageItems;