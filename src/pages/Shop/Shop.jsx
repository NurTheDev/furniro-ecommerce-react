import React, {useMemo} from 'react';
import ProductCard from "../../components/ProductCard.jsx";
import ApiData from "../../hooks/ApiData.js";
import Pagination from "../../components/Pagination.jsx";
import {HiOutlineAdjustmentsHorizontal} from "react-icons/hi2";
import {HiViewGrid} from "react-icons/hi";
import {BsViewList} from "react-icons/bs";
import WeOffer from "./ShopComponent/WeOffer.jsx";
import {MdKeyboardArrowRight} from "react-icons/md";

function Shop() {
    const [showItems, setShowItems] = React.useState(16);
    const [view, setView] = React.useState(true);
    const [short, setShort] = React.useState("default");
    const {data, loading, error} = ApiData("../../../../public/furniture_items_api_v4.json");
    //todo: add sorting and filtering;
    // const [sortData, setSortData] = React.useState(data);
    const filteredSortData = useMemo(() => {
        if (!data) return [];
        let sortedData = [...data];
        switch (short) {
            case "1":
                sortedData.sort((a, b) => {
                    return b.sortData.popularity - a.sortData.popularity
                });
                break;
            case "2":
                sortedData.sort((a, b) => {
                    return b.sortData.rating - a.sortData.rating
                })
                break;
            case "3":
                sortedData.sort((a, b) => {
                    return new Date(b.sortData.latestReviewDate) - new Date(a.sortData.latestReviewDate)
                })
                break;
            case "4":
                sortedData.sort((a, b) => {
                    return a.sortData.price - b.sortData.price
                })
                break;
            case "5":
                sortedData.sort((a, b) => {
                    return b.sortData.price - a.sortData.price
                })
                break;
            default:
                sortedData = [...data];
                break;
        }
        return sortedData;
    }, [data, short]);
    const [page, setPage] = React.useState(1);
    const itemsPerPage = showItems;
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const paginatedData = filteredSortData?.slice(startIdx, endIdx);
    return (
        <div>
            <div
                className={" bg-[url('../../../src/Images/shopBanner.jpg')] bg-cover bg-no-repeat bg-center lg:py-32 py-16 relative"}>
                <div
                    className={"w-full h-full bg-white/40 absolute top-0 left-0 flex flex-col items-center justify-center"}>
                    <h2 className={"heading1"}>Shop</h2>
                    <p className={"flex items-center"}>Home <MdKeyboardArrowRight/> Shop</p>
                </div>
            </div>
            <div className={"bg-[#F9F1E7]"}>
                <div
                    className={"container mx-auto px-4 lg:px-6 flex justify-between items-center py-4 lg:py-6 mb-8 lg:mb-16"}>
                    <div className={" gap-x-6 items-center hidden lg:flex"}>
                        <div className={"flex items-center gap-x-2 cursor-pointer lg:text-xl hover:text-primary "}>
                            <span><HiOutlineAdjustmentsHorizontal/></span>
                            <span>Filter</span>
                        </div>
                        <span className={"cursor-pointer lg:text-xl hover:text-primary "} onClick={() => setView(true)}><HiViewGrid/></span>
                        <span className={"cursor-pointer lg:text-xl hover:text-primary"} onClick={() => setView(false)}><BsViewList/></span>
                        <p className={"border-l-2 border-l-Gray-4 lg:ps-8 ps-4"}>Showing {showItems} of {data?.length} results</p>
                    </div>
                    <div className={"flex gap-x-6 items-center"}>
                        <div className={"flex items-center gap-x-2 "}>
                            <p className={"lg:text-xl"}>Show</p>
                            <select onClick={(e) => {
                                setShowItems(e.target.value === "1" ? 8 : e.target.value === "2" ? 16 : e.target.value === "3" ? 24 : e.target.value === "4" ? 32 : 40);
                            }}
                                    className={"select select-bordered focus:border-none focus:outline-none select-sm w-full max-w-xs"}>
                                <option value="1">8</option>
                                <option selected>16</option>
                                <option value="3">24</option>
                                <option value="4">32</option>
                                <option value="5">40</option>
                            </select>
                        </div>
                        <div className={"flex items-center gap-x-2 justify-end"}>
                            <p className={" lg:text-xl lg:w-full text-end"}>Sort by</p>
                            <select onChange={(e) => {
                                setShort(e.target.value)
                            }}
                                    className={"select select-bordered select-sm lg:w-full w-1/2 max-w-xs focus:border-none focus:outline-none"}>
                                <option value="default" selected>Default</option>
                                <option value="1">Sort by popularity</option>
                                <option value="2">Sort by average rating</option>
                                <option value="3">Sort by latest</option>
                                <option value="4">Sort by price: low to high</option>
                                <option value="5">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto px-4 lg:px-6"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={view ? "product-GridView" : "product-ListView"}>
                        <ProductCard data={paginatedData} loading={loading} error={error}/>
                    </div>
                    <Pagination setPage={setPage} page={page} total={data?.length} itemsPerPage={itemsPerPage}
                                classname={"mt-10"}/></div>
            </div>
            <WeOffer/>
        </div>
    );
}

export default Shop;
