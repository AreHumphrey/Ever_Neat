import React from 'react'
import "./Header.css"
import "./Search/Search"
import {HiOutlineMenu} from 'react-icons/hi';
import {RiSearch2Line} from 'react-icons/ri';
import {MdAccountCircle} from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi';



export default function ButtonAppBar() {
    return (
        <div className="App">
            <button className="button_catalog">
                <HiOutlineMenu className="icon__menu"/>
                Каталог
            </button>
            <button className="Search">
                <input className="input_search"/>
                <RiSearch2Line className="icon__search"/>
            </button>
            <FiShoppingCart className="button_shop"/>
            <MdAccountCircle className = "button__account"/>
        </div>
    );
}
