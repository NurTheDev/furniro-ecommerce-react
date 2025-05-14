import React from 'react';
import ApiData from "../../../hooks/ApiData.js";
import Api from "../../../../public/furniture_real_images.json"
import ProductCard from "../../../components/ProductCard.jsx";
function OurProduct(props) {
    const { data, loading, error } = ApiData("../../../../public/furniture_items_array.json");
    return (
        <div className={"container mx-auto px-4 lg:px-0"}>
            <div className={"flex justify-center flex-wrap px-5 gap-3 items-center"}>
                <ProductCard data={data} loading={loading} error={error} />
            </div>
        </div>
    );
}

export default OurProduct;