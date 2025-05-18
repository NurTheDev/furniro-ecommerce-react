import React from 'react';
import CustomerSupport from "../../../Images/SVG/CustomerSupport.jsx";
import Trophy from "../../../Images/SVG/Trophy.jsx";
import Guarantee from "../../../Images/SVG/Guarantee.jsx";
import Shipping from "../../../Images/SVG/Shipping.jsx";

function WeOffer(props) {
    return (
        <div className={"bg-[#FAF3EA] lg:py-24 py-16 lg:px-0 px-4 mt-10 lg:mt-20"}>
            <div className={"container mx-auto"}>
                <div className={"grid lg:grid-cols-4 grid-cols-2 justify-center space-y-3 lg:space-y-0 items-center gap-4 lg:gap-8"}>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <div><Trophy/></div>
                        <div className={"space-y-2"}><h4 className={"text-lg lg:text-2xl font-semibold"}>High Quality</h4><p className={"lg:text-lg text-Gray-3"}>crafted from top materials</p></div>
                    </div>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <div><Guarantee/></div>
                        <div className={"space-y-2"}><h4 className={"text-lg lg:text-2xl font-semibold"}>Warranty Protection</h4><p className={"lg:text-lg text-Gray-3"}>Over 2 years</p></div>
                    </div>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <div><Shipping/></div>
                        <div className={"space-y-2"}><h4 className={"text-lg lg:text-2xl font-semibold"}>Free Shipping</h4><p className={"lg:text-lg text-Gray-3"}>Order over 150 $</p></div>
                    </div>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <div><CustomerSupport/></div>
                        <div className={"space-y-2"}><h4 className={"text-lg lg:text-2xl font-semibold"}>24 / 7 Support</h4><p className={"lg:text-lg text-Gray-3"}>Dedicated support</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeOffer;