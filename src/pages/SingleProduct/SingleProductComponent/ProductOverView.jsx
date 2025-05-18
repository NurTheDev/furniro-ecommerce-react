import React from 'react';
import {useLocation} from "react-router";

const ProductOverView = () => {
    const location = useLocation();
    const {product} = location.state;
    console.log(product);
    return (
        <div>
            hi
        </div>
    );
};

export default ProductOverView;