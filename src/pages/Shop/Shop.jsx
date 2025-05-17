import React from 'react';
import ProductCard from "../../components/ProductCard.jsx";
import ApiData from "../../hooks/ApiData.js";
import Pagination from "../../components/Pagination.jsx";

function Shop(props) {
    const {data, loading, error} = ApiData("../../../../public/furniture_items_array.json");
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 16;
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const paginatedData = data?.slice(startIdx, endIdx);
    return (
        <div>
            <div className={"container mx-auto px-4 lg:px-6"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"lg:grid grid-cols-4 gap-4"}>
                        <ProductCard data={paginatedData} loading={loading} error={error}/>
                    </div>
                    <Pagination setPage={setPage} page={page} total={data?.length} itemsPerPage={itemsPerPage} classname={"mt-10"}/></div>
            </div>
        </div>
    );
}

export default Shop;