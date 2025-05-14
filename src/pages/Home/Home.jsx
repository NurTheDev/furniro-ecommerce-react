import React from 'react';
import BrowseProduct from "./HomeComponent/BrowseProduct.jsx";
import OurProduct from "./HomeComponent/OurProduct.jsx";

function Home(props) {
    return (
        <div>
            <BrowseProduct/>
            <OurProduct/>
        </div>
    );
}

export default Home;