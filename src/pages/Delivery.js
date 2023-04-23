import Header from "../components/Header/Header";
import "./HeaderLine.css";
import Basement from "../components/Basement/Basement";
import SideBar_left from "../components/SideBar/SideBar_left";
import SideBar_right from "../components/SideBar/SideBar_right";

 function Delivery() {
     return(
         <div>
         <SideBar_left/>
         <Header/>
        <h1 className="headerLine"> Оплата и доставка</h1>
             <div className="line">
                 <h2>Оплата</h2>
                 <p className="h3">
                     <li className="h3"> оплатить заказ можно наличными при получении;</li>
                     <li className="h3">через банк-онлайн на расчетный счет компании;</li>
                     <li className="h3">на карту сбербанка.</li>
                 </p>
                 <h2 className="h3">Доставка</h2>
                 Доставка осуществляется по всему миру:
                 <ui>
                     <li className="h3">почтой России;</li>
                     <li className="h3">курьерскими службами BoxBerry и EMS;</li>
                     <li className="h3">другими транспортными компаниями.</li>
                 </ui>

                 <h3 className="h3">Понедельник-пятница с 9.00 до 19.00.</h3>
                 <p className="h3">При заказе от 1500 рублей - доставка  по Владивостоку бесплатно!</p>
                 <p className="h3">При заказе от 6000 рублей - доставка по регионам РФ бесплатно!</p>
                 <p className="h3">Стоимость доставки по г. Владивостоку 500 рублей.</p>
                 <p className="h3"><b>Cтоимость доставки на о. Русский приравнивается к доставке по регионам, при заказе от 6000 рублей - доставка бесплатная, при заказе на меньшую сумму, доставка составит 500 рублей.</b> </p>
                 <b className="h3">В случае доставки Почтой или курьерскими службами, отправка заказа осуществляется после 100 % предоплаты товара.</b>
                 <h2 className="h3">Самовывоз</h2>
                 <b className="h3">Адрес: ул. Русская, 94 А.</b>
                 <b className="h3">Понедельник-пятница с 9.00 до 20.00 без перерывов на обед.</b>
             </div>
             <SideBar_right/>
             <Basement/>

         </div>
     );
 }
export default Delivery;