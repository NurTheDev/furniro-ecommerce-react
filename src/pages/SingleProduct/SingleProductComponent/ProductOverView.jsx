import React, {useState} from 'react';
import {useLocation} from "react-router";
import {MdKeyboardArrowRight} from "react-icons/md";
import {GoStarFill} from "react-icons/go";
import {colorClasses} from "../../../lib.js";
import {FaFacebook, FaInstagram, FaLinkedin, FaMinus, FaPlus, FaTwitter} from "react-icons/fa";
import CartBtn from "../../../components/CartBtn.jsx";

const ProductOverView = () => {
    const location = useLocation();
    const {product} = location.state;
    const [mainImg, setMainImg] = useState(product?.image);
    const additionalImages = product?.additionalImages || [];
    const allImages = [...additionalImages, product?.image];
    return (
        <div className={"container mx-auto mt-6 lg:mt-10 px-4 lg:px-0"}>
            <div className="lg:grid lg:grid-cols-2 gap-x-10 gap-y-6">
                <div className="lg:col-span-1 grid grid-cols-8 lg:grid-cols-6 gap-4">
                    <div className={"col-span-2"}>
                        {allImages?.map((image, index) => (
                            <div key={index}
                                 className="overflow-hidden w-full rounded-xl flex flex-col justify-center p-4 items-center cursor-pointer "
                                 onClick={() => setMainImg(image)}>
                                <img src={image} alt={`Additional Image ${index + 1}`}
                                     className="w-full rounded-xl hover:scale-105 object-cover h-full max-h-[80px] transition-transform duration-500"/>
                            </div>
                        ))}
                    </div>
                    <div className={"col-span-6 lg:col-span-5 h-full max-h-[500px] rounded-lg "}><img src={mainImg} alt={"Image"} className="w-full h-full object-cover transition-transform duration-500 rounded-lg"/>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col justify-start space-y-4">
                    <h2 className="heading1">{product.title}</h2>
                    <p className="text-lg lg:text-2xl text-[#9F9F9F]"> $ {product.price}</p>
                    <div className={"flex justify-start"}>
                        <div className={"flex justify-start items-center gap-x-2 "}>
                            {Array(Math.floor(product.sortData?.rating || 0)).fill(0).map((_, index) => (
                                <span key={index} className="text-yellow-500 text-lg"><GoStarFill/></span>
                            ))}
                        </div>
                        <p className="text-sm lg:text-base pl-5 border-l-2 border-l-[#9F9F9F] ml-10 text-[#9F9F9F]">{product.sortData?.rating} ({product.sortData?.totalReviews} Reviews)</p>
                    </div>
                    <p className={"mt-2 text-Gray-2"}>{product?.description}</p>
                    <div>
                        <p className={"text-Gray-4"}>Size</p>
                        <div className={"flex justify-start gap-x-4 mt-3 "}>
                            {
                                product?.sizes?.map((size, index) => (
                                    <p key={index}
                                       className={"px-2 py-1 bg-[#F9F1E7] rounded-lg text-sm lg:text-base hover:bg-primary hover:text-white cursor-pointer"}>{size}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <p className={"text-Gray-4"}>Color</p>
                        <div className="flex gap-2 flex-wrap mt-3">
                            {product?.availableColors?.map((color, index) => {
                                const lowerColor = color.toLowerCase();
                                const bgClass = colorClasses[lowerColor] || "bg-gray-200";
                                return (
                                    <p
                                        key={index}
                                        className={`w-6 h-6 rounded-full ${bgClass} border border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-300`}
                                        title={color}
                                    ></p>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"flex gap-5 items-center mt-4"}>
                        <div className={"flex justify-between items-center border border-Gray-4 py-2 px-4 rounded-lg"}>
                            <button className={"hover:text-primary cursor-pointer"}>
                                <FaMinus/>
                            </button>
                            <span className={"px-4 py-2  rounded-lg text-sm lg:text-base"}>1</span>
                            <button className={"hover:text-primary cursor-pointer"}>
                                <FaPlus/>
                            </button>
                        </div>
                        <CartBtn btnText={"Add To Cart"}/>
                        <CartBtn btnText={"+ Compare"}/>
                    </div>
                    <div className="mt-6 border-t border-Gray-4 pt-4">
                        <table className="w-full">
                            <tbody>
                            <tr>
                                <td className="text-Gray-4 py-2 font-medium">SKU</td>
                                <td className="text-Gray-2 pl-4 py-2"><span className={"mr-2"}>: </span> {product.sku}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-Gray-4 py-2 font-medium">Category</td>
                                <td className="text-Gray-2 pl-4 py-2"><span
                                    className={"mr-2"}>: </span> {product.category}</td>
                            </tr>
                            <tr>
                                <td className="text-Gray-4 py-2 font-medium">Tag</td>
                                <td className="text-Gray-2 pl-4 py-2"><span className={"mr-2"}>: </span> {product.tags}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-Gray-4 py-2 font-medium">Share</td>
                                <td className={"flex items-center"}><span
                                    className={"mr-2 text-Gray-2 pl-4 py-2"}>: </span>
                                    <div className={"flex gap-x-4 text-xl"}>
                                        <span className={"hover:scale-105 cursor-pointer"}><FaFacebook/></span>
                                        <span className={"hover:scale-105 cursor-pointer"}><FaLinkedin/></span>
                                        <span className={"hover:scale-105 cursor-pointer"}><FaInstagram/></span>
                                        <span className={"hover:scale-105 cursor-pointer"}><FaTwitter/></span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductOverView;