
const MenuCard = ({item}) => {

    const {name,recipe,image,price} = item;
   

    return (
        <div className="flex space-x-6 mb-10">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
            <div className="space-y-2">
                <h3 className="uppercase">{name}</h3>
                <small>{recipe}</small>
            </div>
            <p className="text-yellow-500">${price}</p>

        </div>
    );
};

export default MenuCard;