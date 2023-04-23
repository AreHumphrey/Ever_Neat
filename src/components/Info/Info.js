import {FiTruck} from "react-icons/fi";
import {HiLocationMarker} from "react-icons/hi";
import {GrCertificate} from "react-icons/gr";
import {TbMessageCircle2} from "react-icons/tb";
import React from "react";
import "./Info.css";
export default function Info() {
    return (
        <div className="Inf">
            <a href="/delivery" className="delivery"><FiTruck className={"icon__truck"}/> БЕСПЛАТНАЯ ДОСТАВКА <div
                className="text_info">Заказы от 1500 руб. доставим бесплатно по Владивостоку!
                Заказы от 1500 руб. доставим бесплатно по регионам РФ!</div></a>
            <a href="/location" className="location"><HiLocationMarker className={"icon__truck"}/> МЕСТОПОЛОЖЕНИЕ <div
                className="text_info"> Владивосток, ул. Русская, 94 А</div></a>
            <a href="/certificate" className="cetificate"><GrCertificate className={"icon__truck"}/> ВЫСОКОЕ
                КАЧЕСТВО
                <div className="text_info"> Изделия только из натуральных материалов</div>
            </a>
            <a href="/help" className="message"><TbMessageCircle2 className={"icon__truck"}/> НАША ПОДДЕРЖКА <div
                className="text_info">Остались вопросы?
                Звоните по телефону
                +7 (423) 202-52-53</div></a>
        </div>

)
    ;

}