import React from 'react';
import ApiData from "../../../hooks/ApiData.js";
import Api from "../../../../public/furniture_real_images.json"
import ProductCard from "../../../components/ProductCard.jsx";
import SecondaryButton from "../../../components/SecondaryButton.jsx";
function OurProduct(props) {
    const { data, loading, error } = ApiData("../../../../public/furniture_items_api_v4.json");
    return (
        <div className={"container mx-auto px-4 lg:px-0 lg:mt-14 mt-8 flex flex-col items-center"}>
            <h2 className={"heading1 text-center"}>Our Products</h2>
            <div className={"lg:grid grid-cols-4 justify-between mt-8 space-y-4 lg:space-y-0 lg:flex-wrap px-5 gap-3 items-center"}>
                <ProductCard data={data} loading={loading} error={error} slice ={props.slice}/>
            </div>
            <SecondaryButton btnText={"Show More"} classname={"lg:mt-10 mt-8 w-full"}/>
        </div>
    );
}

export default OurProduct;