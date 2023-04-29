import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Basement from "../components/Basement/Basement";
import "../App.css";
import React from "react";
import "./HeaderLine.css";
import {Carousel} from "../components/Сarousel/Carousel";
import Catalog_Main from "../components/Catalog_main/Catalog_Main";
import Map from "../components/Map/Map"
function Main() {


    return (
        <div>
            <Header/>
            <Carousel>
                <div className="item-1"></div>
                <div className="item-2"></div>
                <div className="item-3"></div>
            </Carousel>
            <Info/>
            <h1 className="h1">Каталог</h1>
            <Catalog_Main/>
            <Map/>
            <Basement/>

        </div>


    );
}

export default Main;
