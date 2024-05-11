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
    </section>
    );
};

export default PopularMenu;