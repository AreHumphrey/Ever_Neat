import "./Basement.css"
import React from "react";
import {SlSocialVkontakte}  from "react-icons/sl";
import {TiSocialYoutube}  from "react-icons/ti";
import Requisites from "../../pages/Requisites";
export default function Basement() {
    return (
        <div className="basement">
            <div className="сolumn1">O компании</div>
            <a href="/delivery" className="сolumn1_1">Оплата и доставка</a>
            <a href="#" className="сolumn1_2">Новости</a>
            <a href="#" className="сolumn1_3">О компании</a>
            <a href="#" className="сolumn1_4">Личный кабинет</a>
            <div className="сolumn2">О компании</div>
            <a href="#" className="сolumn2_1">Вакансии</a>
            <a href="/requisites" className="сolumn2_2">Реквизиты</a>
            <a href="/confidentiality" className="сolumn2_3">Конфиденциальность</a>
            <div className="сolumn3">Контакты</div>
            <div className="сolumn3_1">Владивосток, ул. Русская, 94А</div>
            <div className="сolumn3_2">everneat@everneat.ru</div>
            <div className="сolumn3_3">+ 7 (902) 488-80-70</div>
            <div className="сolumn3_4">+ 7 (423) 202-52-53</div>
            <SlSocialVkontakte className="Vk"/>
            <TiSocialYoutube className="Youtube"/>


        </div>
    );
}
