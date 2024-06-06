/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import SectionTtle from "../../../components/SectionTitle/SectionTtle";
import useAxiosPublic from "../../../CustomHooks/useAxiosPublic";
import useAxios from "../../../CustomHooks/useAxios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const imageUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const {name, price,  recipe, category, _id} = useLoaderData();

    const axiosPublic= useAxiosPublic();
    const axiosSecure = useAxios();


    const onSubmit = async(data) => {
        console.log(data);

    //   uploaaad image to image bb using axios

    const imageFile ={image : data.image[0]}  
        const res = await axiosPublic.post(imageUrl,imageFile,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
         console.log(res.data);
        if(res.data.success){
            // send data to the server with image url
            const menuItem ={
                name: data.name,
                category: data.category,
                price:parseFloat (data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount>0){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} is added to the db`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <SectionTtle heading="update item" subHeading="new here"></SectionTtle>

            <div className="mx-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                 <div>
                 <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input type="text"
                        defaultValue={name}
                         placeholder="Recipe name" 
                         {...register('name')}
                         className="input input-bordered w-full " />
                    </label>
                 </div>

                    <div className="flex  w-full gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        
                       
                       
                          <select  defaultValue="{default}" {...register('category')} className="select select-bordered ">
                        <option disabled  value="{default}">Category</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Dessert</option>
                        <option>Soup</option>
                        <option>Drinks</option>
                    </select>
                    </label>
                        
                            {/* price */}
                            <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span  className="label-text ">Price</span>
                        </div>
                        <input type="number"
                        defaultValue={price}
                         placeholder="price" 
                         {...register('price')}
                         className="input input-bordered w-full " />
                         </label>
                        
                        </div>
                        {/* text area */}
                     <div className="flex flex-col">
                     <h2 className="my-2">Recipe details</h2>
                        <textarea className="textarea textarea-warning" defaultValue={recipe}  {...register('recipe')} placeholder="Recipe details"></textarea>
                     </div>
                  {/* photo upload */}
                        <div className=" flex flex-col">
                           <h2 className="text-2xl font-semibold my-2">Upload Photo</h2>
                        <input type="file"{...register('image')} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        
                        
                   
                   <button className="btn btn-outline my-3  bg-orange-400">Update Items</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;