import SectionTtle from "../../../components/SectionTitle/SectionTtle";
import Featuredimg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="p-8 my-20">
            <SectionTtle
            subHeading={"check it out"}
            heading={"Featured"}
            >

            </SectionTtle>
            <div className="md:flex  justify-center items-center pt-12 pb-20 px-16 featured-item bg-fixed">
                <div>
                <img src={Featuredimg} alt="" />

                </div>
                <div className="md:ml-10  text-red-500  ">
              <p>May 11,2024</p>
              <p>WHERE CAN I GET SOME?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, obcaecati! Quasi deserunt, adipisci optio officia cumque praesentium nam! Veritatis dignissimos omnis labore perspiciatis ipsa, explicabo esse tenetur quaerat aliquid necessitatibus.</p>
              <button className="btn btn-outline border-0 border-b-4  text-white">Read more</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;