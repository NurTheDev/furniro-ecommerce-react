import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BrowseProductItem} from "../../../lib.js"
// import ApiData from "../../../hooks/ApiData.js";
function BrowseProduct(props) {
    // const { data, loading, error } = ApiData("https://dummyjson.com/products/category/furniture");
    console.log("BrowseProduct", BrowseProductItem);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        width: "100%",
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={"container mx-auto px-4 lg:px-0"}>
            <div>
                <div className={"text-center space-y-2"}>
                    <h2 className={"heading2"}>Browse The Range</h2>
                    <p className={" lg:text-xl text-Font-Color1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!</p>
                </div>
                {/* Add more content or components related to browsing products here */}
                <div className={"slider-container"}>
                    <Slider {...settings } >
                        {BrowseProductItem.map((item) => (
                            <div key={item.id} className={"slider-item !flex justify-center mt-4 lg:mt-12 items-center flex-col cursor-pointer group"}>
                                <div className={"overflow-hidden w-full h-[200px] lg:h-[508px] flex justify-center p-4 items-center"}>
                                    <img src={item.image} alt={item.title} className={"slider-image w-full hover:scale-110 transition duration-200 "} />
                                </div>
                                <h3 className={"mt-4 heading-4 group-hover:text-primary"}>{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BrowseProduct;