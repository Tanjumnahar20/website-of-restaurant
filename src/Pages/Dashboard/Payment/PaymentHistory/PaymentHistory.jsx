import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../CustomHooks/useAuth";
import useAxios from "../../../../CustomHooks/useAxios";



const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios()

   const {data: payments=[]} =useQuery({
    queryKey:['payments', user.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/payment/${user.email}`)
        return res.data
    }
   }) 

    return (
        <div>
            <h2 className="text-3xl">Total payment: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Transaction id</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment, index)=> <tr key={payment._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{payment.email}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.price}</td>
        <td>{payment.date}</td>
        <td>{payment.status}</td>
      </tr>)
      }
     
      {/* row 2 */}
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;