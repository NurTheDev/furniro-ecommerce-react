import React, { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import { BrowseProductItem } from "../../../lib.js";
import Slider from "react-slick";
import {FaArrowRightLong} from "react-icons/fa6";

function BeautifulRooms() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2 ,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "200px",
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    dotsClass: "slick-dots custom-dots-primary",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="bg-[#FCF8F3] lg:mt-14 my-8 py-8 lg:py-0">
        <div className="container mx-auto lg:grid grid-cols-3 gap-4 px-4 lg:px-0">
          <div className="flex flex-col justify-center gap-y-3">
            <h1 className="heading1">50+ Beautiful rooms inspiration</h1>
            <p className="text-Gray-2 font-medium text-sm lg:text-base">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <PrimaryButton btnText="Explore More" classname="mt-4" />
          </div>
          <div className="lg:col-span-2 col-span-3 slider-container mt-4 lg:mt-0">
            <Slider {...settings}>
              {BrowseProductItem?.map((item, index) => (
                  <div
                      key={item.id}
                      className="slider-item !flex justify-center mt-4 lg:mt-12 items-center flex-col cursor-pointer group relative"
                  >
                    <div className={`overflow-hidden w-full flex justify-center p-4 items-center ${index === currentIndex ? "lg:h-[608px] h-[200px]" : "lg:h-[468px] h-[200px]"}`}>
                      <img
                          src={item.image}
                          alt={item.title}
                          className={`slider-image w-full hover:scale-110 transition duration-200`}
                      />
                    </div>

                    {/* Conditionally render the title only for the centered item */}
                    {index === currentIndex && (
                        <div className={"flex justify-center items-end absolute bottom-0 lg:left-10 left-5 "}>
                            <div className={"bg-white/70 lg:p-8 p-2"}>
                              <p>{item.shortDescription}</p>
                              <h3 className="lg:mt-4 mt-1 heading4 group-hover:text-primary">
                                {item.title}
                              </h3>
                            </div>
                          <button className="px-3 py-3 bg-primary text-white font-semibold text-center hover:border-2 hover:border-primary hidden lg:block hover:bg-white hover:text-primary transition duration-200 cursor-pointer">
                            <FaArrowRightLong />
                          </button>
                        </div>
                    )}
                  </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
  );
}

export default BeautifulRooms;
