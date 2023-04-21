import React from 'react'
import "./Header.css"
import "./Search/Search"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';


export default function ButtonAppBar() {
    return (
        <div className="App">
            <button className="button_catalog">
                <MenuIcon className="icon__menu"/>
                Каталог
            </button>
            <button className="Search">
                <input className="input_search"/>
                <SearchIcon className="icon__search"/>
            </button>
            <ShoppingCart className="button_shop"/>
            <AccountCircle className = "button__account"/>
        </div>
    );
}
