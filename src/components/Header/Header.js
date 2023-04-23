import React from 'react'
import "./Header.css"
import "./Search/Search"
import {AiOutlineMinus} from 'react-icons/ai';
import {HiOutlineMenu} from 'react-icons/hi';
import {RiSearch2Line} from 'react-icons/ri';
import {MdAccountCircle} from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi';


export default function ButtonAppBar() {
    return (
        <div className="App">
            <div className="button_catalog_dropdown">
                <button className="button_catalog"><HiOutlineMenu className="icon__menu"/>
                    Каталог
                </button>
                <div className="dropdown-content">
                    <button className="button_catalog_white">
                        <AiOutlineMinus/>
                    </button>
                    <a href="#">Сувенирные носки</a>
                    <a href="#">Подарочные наборы</a>
                    <a href="#">Носки мужские</a>
                    <a href="#">Носки мужские</a>
                    <a href="#">Носки детские</a>
                </div>

            </div>

            <button className="Search">
                <input className="input_search"/>
                <RiSearch2Line className="icon__search"/>
            </button>
            <FiShoppingCart className="button_shop"/>
            <MdAccountCircle className="button__account"/>
        </div>
    );
}
