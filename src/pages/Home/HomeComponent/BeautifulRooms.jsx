import React from "react";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import { BrowseProductItem } from "../../../lib.js";
import Slider from "react-slick";

function BeautifulRooms(props) {
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
    <div className={"bg-[#FCF8F3] lg:mt-14 mt-8"}>
      <div className={"container mx-auto grid grid-cols-3 gap-4 px-4 lg:px-0"}>
        <div className={"flex flex-col justify-center  gap-y-3"}>
          <h1 className={"heading1"}>50+ Beautiful rooms inspiration</h1>
          <p className={"text-Gray-2 font-medium text-sm lg:text-base"}>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <PrimaryButton btnText={"Explore More"} classname={"mt-4"} />
        </div>
        <div className={"col-span-2 slider-container"}>
          <Slider {...settings}>
            {BrowseProductItem?.map((item) => (
              <div
                key={item.id}
                className={
                  "slider-item !flex justify-center mt-4 lg:mt-12 items-center flex-col cursor-pointer group"
                }
              >
                <div
                  className={
                    "overflow-hidden w-full h-[200px] lg:h-[508px] flex justify-center p-4 items-center"
                  }
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={
                      "slider-image w-full hover:scale-110 transition duration-200 "
                    }
                  />
                </div>
                <h3 className={"mt-4 heading4 group-hover:text-primary"}>
                  {item.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BeautifulRooms;
