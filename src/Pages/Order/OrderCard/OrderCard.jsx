import { Link } from "react-router-dom";

const OrderCard = ({item}) => {
    const {name,recipe,image,price} = item;
    console.log(name,recipe,image);

    return (
        <div className="card card-compact w-[300px] h[250px] bg-base-100 shadow-xl">
        <figure><img className="h-" src={image} alt="Shoes" /></figure>
          <p className="bg-black text-white absolute right-0 mr-5 mt-5 px-5">{price}</p>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center mb-12">
           <Link to=''>
           <button className="btn btn-primary btn-outline border-0 border-b-4">Add to cart</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;