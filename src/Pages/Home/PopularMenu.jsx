import { useEffect, useState } from "react";
import SectionTtle from "../../components/SectionTitle/SectionTtle";
import MenuCard from "../../shared/MenuCard/MenuCard";

const PopularMenu = () => {

    const [menu,setMenu] = useState([]);

    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(items=>items.category==="popular")
             setMenu(popularItem)
        })
    }, [] )

    return (
        <section>
        <SectionTtle
        subHeading={"Check it out"}
        heading={"popular menu"}
        >
      </SectionTtle>

      <div className="grid md:grid-cols-2 gap-6">
        {
            menu.map(item => <MenuCard
            item={item}
            key={item._id}
            ></MenuCard>)
        }

      </div>
       <div className="flex justify-center">
       <button className="btn btn-outline border-0 border-b-4  text-black">view full menu</button>

       </div>
    <div className="flex justify-center">
    <div className="w-[700px] h-[100px]  mt-8 bg-black">
   <h3 className="text-white text-4xl text-center pt-8 ">Call us:01789643</h3>
       </div>
    </div>
    </section>
    );
};

export default PopularMenu;