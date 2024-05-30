import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUser = () => {
  const axiosSecure = useAxios();
   const {data: users=[], refetch}=  useQuery({
    queryKey: ['users'],
    queryFn: async ()=>{
     const res= await axiosSecure.get('/users');
     return res.data
    }  
        
   })

   const handleDeleteUser = (user) =>{
    console.log('delete user', user);
    console.log('clicked on button');
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
        axiosSecure.delete(`/users/${user._id}`)
        .then(res=>{
          console.log('from db', res.data);
          if(res.data.deletedCount> 0){
            refetch();
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

   const  handleMakeAdmin = user=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now admin`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
   }

    return (
      <div>
        
         <div className="flex justify-evenly m-6">
            <h2 className="text-3xl">Total User: {users.length}</h2>
            <h2 className="text-3xl">Total item</h2>
         </div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
        {
            users.map((user,index) =>  <tbody key={user._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                  { user.role==='admin'? 'Admin' :  <button  onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-lg"><FaUsers className="text-orange-400" />
                  </button>}
                  </td>
                  <td>
                  <button onClick={()=> handleDeleteUser(user)} className="btn btn-ghost btn-lg"><RiDeleteBin6Fill className="text-red-600" />
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

export default AllUser;