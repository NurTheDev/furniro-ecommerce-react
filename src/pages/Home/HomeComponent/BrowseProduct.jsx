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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!</p>
            {/* Add more content or components related to browsing products here */}
            <div className={"slider-container mt-10"}>
                <Slider {...settings}>
                    {BrowseProductItem.map((item) => (
                        <div key={item.id} className={"slider-item"}>
                            <img src={item.image} alt={item.title} className={"slider-image"}/>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BrowseProduct;