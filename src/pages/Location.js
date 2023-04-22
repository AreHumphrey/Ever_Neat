import Header from "../components/Header/Header";
import React from "react";
import "./HeaderLine.css";
function Location() {
    return(
        <div>
            <Header/>
            <h1 className = "headerLine"> Местоположение</h1>
            <b className="line">Головной офис, оптовый склад, магазин: часы работы: пн-пт с 9:00 до 18:00 без обеда. сб, вс - выходной</b>
            <iframe className="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.685615767941!2d131.93762636548237!3d43.17412292914066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3914e8c1f2e21%3A0x906f8f8b2708d1aa!2z0JfQsNCy0L7QtCAi0JLQsNGA0Y_QsyI!5e0!3m2!1sru!2sru!4v1640086839649!5m2!1sru!2sru"
                    width="100%" height="450" allowFullScreen="allowfullscreen" loading="lazy"></iframe>
        </div>
    );
}
export default Location;