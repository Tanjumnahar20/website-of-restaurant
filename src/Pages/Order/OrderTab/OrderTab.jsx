import OrderCard from "../OrderCard/OrderCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const OrderTab = ({items}) => {

    const itemsPerPage = 3; // Define the number of items per page
const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >

{Array.from({ length: totalPages }, (_, index) => (
    <SwiperSlide  key={index}>
    {/* <div className="grid md:grid-cols-3 gap-5 mb-8"> */}
    <div className="flex md:1 gap-5 mb-8 justify-center">
        {
            items.slice(index * itemsPerPage, (index + 1) * itemsPerPage).map(item=>   <OrderCard
            key={item._id}
            item={item}
            >

            </OrderCard>)
        }
    </div>
    </SwiperSlide>
    
    
))}
</Swiper>
      
    );
};

export default OrderTab;

