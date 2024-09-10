import SectionTtle from "../../../components/SectionTitle/SectionTtle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://website-of-restaurant-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-10">
            <SectionTtle
                subHeading="what our client say"
                heading="Testimonials"
            >
            </SectionTtle>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                       
                        <div className="m-20 flex flex-col items-center">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                            <p className="py-10">{review.details}</p>
                            <h3 className="text-3xl text-orange-600">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;