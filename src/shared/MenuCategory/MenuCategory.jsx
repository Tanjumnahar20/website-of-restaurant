import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuCard from "../MenuCard/MenuCard";

const MenuCategory = ({items,img,title}) => {
  
    return (
       <section className="mt-10">
        
        { title && <Cover img={img} title={title}></Cover>}
     
         < div className="grid md:grid-cols-2 gap-6 my-5">
        {
               items.map(item => <MenuCard
               item={item}
               key={item._id}
               ></MenuCard>)
           }
           </div>
          <div className="flex justify-center">
         <Link to={`/order/${title}`}>
         <button className="btn btn-outline border-0 border-b-4  text-black">Order your favourite food</button>
         </Link>
          </div>

       </section>
    );
};

export default MenuCategory;