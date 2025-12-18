import React from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/Hero/one.png';
import Image2 from '../../assets/Hero/two.png';
import Image3 from '../../assets/Hero/three.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    { id: 1, image: Image1, title: "Big Sale", description: "Up to 50% Off" },
    { id: 2, image: Image2, title: "New Arrivals", description: "New Collection" },
    { id: 3, image: Image3, title: "Exclusive Offer", description: "Limited Time" }
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,        // slowed down a bit (was 1000ms — too fast)
        pauseOnHover: true,
        fade: true,
        accessibility: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
            {/* Removed: dark:bg-gray-950 dark:text-white */}

            <div className="container pb-8 sm:pb-0 w-full">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4">
                                {/* Text Section */}
                                <div className="order-2 sm:order-1 flex flex-col justify-center gap-6 text-center sm:text-left">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                                        {data.title}
                                    </h1>
                                    <p className="text-lg text-gray-600">
                                        {data.description}
                                    </p>
                                    <button
                                        onClick={handleOrderPopup}
                                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-8 rounded-full font-medium inline-block"
                                    >
                                        Order Now
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className="order-1 sm:order-2 flex justify-center">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="max-w-[300px] sm:max-w-[450px] w-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;