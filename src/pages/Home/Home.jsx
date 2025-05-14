import React from 'react';
import BrowseProduct from "./HomeComponent/BrowseProduct.jsx";
import OurProduct from "./HomeComponent/OurProduct.jsx";
import BeautifulRooms from "./HomeComponent/BeautifulRooms.jsx";

function Home(props) {
    return (
        <div>
            <BrowseProduct/>
            <OurProduct/>
            <BeautifulRooms/>
        </div>
    );
}

export default Home;