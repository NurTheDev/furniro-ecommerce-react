import React from 'react';
import SecondaryButton from "./SecondaryButton.jsx";
import {CiShare2} from "react-icons/ci";
import {FaArrowRightArrowLeft} from "react-icons/fa6";
import {FaRegHeart} from "react-icons/fa";

function ProductCard({data = [], loading, error, slice}) {
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            {
                data.slice(0, slice)?.map((product) => (
                    <div key={product.id} className={"  overflow-hidden cursor-pointer group relative"}>
                        <div className={"relative h-[300px] w-full overflow-hidden"}><img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src={product.image}
                            alt="image"
                        />
                            <div className={"absolute top-4 right-4 "}>
                                {product.newArrival? <div className={"w-12 h-12 rounded-full flex justify-center items-center bg-green-accent text-white font-semibold"}>New</div> :<div className={"w-12 h-12 rounded-full flex justify-center items-center bg-red-accent text-white font-semibold"}>{product.discount}</div>}
                            </div>
                        </div>
                        <div className={"bg-light-bg p-4"}>
                            <h3 className={"heading4"}>{product.title}</h3> <p className={"text-Gray-3 font-medium text-sm lg:text-base"}>{product.shortDescription}</p>
                            <div className={"flex justify-between items-center mt-4"}>
                                <h4 className={"heading4"}>{product.price}</h4> <p><del className={"text-Gray-4"}>50.000</del></p>
                            </div>
                        </div>
                        <div className="h-full flex flex-col justify-center gap-y-4 items-center bg-Gray-1/70 absolute top-0 w-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
  transition-opacity duration-500">
                        <SecondaryButton btnText={"Add to Cart"} classname={"w-full"}/>
                            <div className={"flex justify-evenly w-full items-center"}>
                                <p className={"flex items-center space-x-1 font-semibold text-sm lg:text-base text-white hover:text-primary"}><span><CiShare2 /></span> <span>Share</span></p>
                                <p className={"flex items-center space-x-1 font-semibold text-sm lg:text-base text-white hover:text-primary"}><span><FaArrowRightArrowLeft /></span> <span>Share</span></p>
                                <p className={"flex items-center space-x-1 font-semibold text-sm lg:text-base text-white hover:text-primary"}><span><FaRegHeart /></span> <span>Share</span></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ProductCard;