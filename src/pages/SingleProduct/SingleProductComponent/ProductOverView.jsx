import React, {useState} from 'react';
import {useLocation} from "react-router";
import {MdKeyboardArrowRight} from "react-icons/md";

const ProductOverView = () => {
    const location = useLocation();
    const {product} = location.state;
    const [mainImg, setMainImg] = useState(product?.image);
    const additionalImages = product?.additionalImages || [];
    return (
        <div className={"container mx-auto mt-6 lg:mt-10 "}>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 grid grid-cols-6 gap-4">
                    <div className={""}>
                        {product?.additionalImages?.map((image, index) => (
                            <div key={index} className="overflow-hidden w-full rounded-xl flex flex-col justify-center p-4 items-center cursor-pointer" onClick={()=> setMainImg(image)}>
                                <img src={image} alt={`Additional Image ${index + 1}`} className="w-full rounded-xl hover:scale-105 object-cover h-full max-h-[80px] transition-transform duration-500"/>
                            </div>
                        ))}
                    </div>
                    <div className={"col-span-5 h-full max-h-[500px] rounded-lg "}><img src={mainImg} alt={"Image"} className="w-full h-full object-cover transition-transform duration-500 rounded-lg"/></div>
                </div>
                <div className="col-span-1 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-lg text-gray-600">{product.description}</p>
                    <p className="text-xl font-semibold">${product.price}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default ProductOverView;