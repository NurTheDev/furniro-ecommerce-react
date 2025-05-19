import React from 'react';
import ProductOverView from "./SingleProductComponent/ProductOverView.jsx";
import {MdKeyboardArrowRight} from "react-icons/md";

function SingleProduct() {
    return (
        <div>
            <div className={"bg-[#F9F1E7] py-5 lg:py-8"}>
                <div className={"container mx-auto"}>
                    <div className={"flex items-center justify-start gap-x-2 lg:gap-x-4 lg:text-lg"}>
                        <p>Home</p><span><MdKeyboardArrowRight/></span> <p>Shop</p><span><MdKeyboardArrowRight/></span><p className={"pl-6 border-l-2 border-l-Gray-4"}>Asgaard sofa</p>
                    </div>
                </div>
            </div>
            <ProductOverView/>
        </div>
    );
}

export default SingleProduct;