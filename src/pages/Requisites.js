import Header from "../components/Header/Header";
import React from "react";
import "./HeaderLine.css";
import Basement from "../components/Basement/Basement";
import SideBar_left from "../components/SideBar/SideBar_left";
import SideBar_right from "../components/SideBar/SideBar_right";

function Requisites() {
    return (
        <div>
            <SideBar_left/>
            <Header/>
            <h1 className="headerLine"> Реквизиты банковского счёта</h1>
            <p className="line"><b className="h3">
                Организация Индивидуальный предприниматель ЩЕРБИНА ИРИНА
                ВАЛЕРЬЕВНА</b></p>
            <p className="line"><b className="h3">ИНН 253802182742</b></p>
            <p className="line"><b className="h3">ОГРН/ОГРНИП 312254317200031</b></p>
            <p className="line"><b className="h3">Расчётный счёт 40802810902500019970</b></p>
            <p className="line"><b className="h3">БИК 044525999</b></p>
            <p className="line"><b className="h3">Точка ПАО Банка «ФК Открытие» г. Москва</b></p>
            <p className="line"><b className="h3">Корр. счёт 30101810845250000999 </b></p>

            <SideBar_right/>
            <Basement/>
        </div>

    );
}

export default Requisites;