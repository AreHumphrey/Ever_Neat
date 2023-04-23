import "./Catalog_Main.css"
import React from "react";
export default function Catalog_Main() {
    return (
        <div className="catalog">
            <button className="b1">
                <button className="b1_b">
                    <a href="#" className="text">СУВЕНИРНЫЕ НОСКИ</a>
                </button>
            </button>
            <button className="b2">
                <button className="b2_b">
                    <a href="#" className="text">ОРИГИНАЛЬНЫЕ ПРИНТЫ</a>
                </button>
            </button>
            <button className="b3">
                <button className="b3_b">
                    <a href="#" className="text">ПОДАРОЧНЫЕ НАБОРЫ</a>
                </button>
            </button>
            <button className="b4">
                <button className="b4_b">
                    <a href="#" className="text_men">МУЖСКИЕ НОСКИ</a>
                </button>
            </button>
            <button className="b5">
                <button className="b5_b">
                    <a href="#" className="text">ДЕТСКИЕ НОСКИ</a>
                </button>
            </button>
            <button className="b6">
                <button className="b6_b">
                    <a href="#" className="text_w">ЖЕНСКИЕ НОСКИ</a>
                </button>
            </button>
        </div>
    );
}