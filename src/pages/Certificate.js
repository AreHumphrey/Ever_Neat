import Header from "../components/Header/Header";
import "./HeaderLine.css";
import Basement from "../components/Basement/Basement";
import SideBar_left from "../components/SideBar/SideBar_left";
import SideBar_right from "../components/SideBar/SideBar_right";

function Certificate() {
    return (
        <div>

            <Header/>
            <SideBar_left/>
            <div className="line">

                <h1 className="headerLine"> О продукции и качестве носков ЭВЕРНИТ </h1>

                <h3 className="h3">Поставщик носков для Интернет-магазина NoskiDV.ru - ЭВЕРНИТ - производитель
                    чулочно-носочных изделий
                    европейского качества во Владивостоке.
                </h3>
                <b className="h3">Продукция Эвернит</b>
                <li className="h3">Носки мужские</li>
                <li className="h3">Носки женские</li>
                <li className="h3">Носки подростковые</li>
                <li className="h3">Носки праздничные</li>
                <li className="h3">Носки спортивные</li>
                <li className="h3">Индивидуальные заказы на изготовление продукции специального назначения: под
                    определенный вид форменного
                    костюма, спортивные носки с эмблемами команд, спортивных клубов и т.д.
                </li>
                <div className="h3">Внешний вид, комфортность, разнообразие цветов и рисунков – вот те составляющие,
                    которые обеспечивают конкурентоспособность и узнаваемость коллекции мужских и женских носков нашей
                    фабрики.
                </div>
                <div className="h3"> Мы принимаем индивидуальные заказы на изготовление продукции специального
                    назначения: под определенный вид форменного костюма, спортивные носки с эмблемами команд, спортивных
                    клубов и т.д.
                </div>
                <div className="h3">Сделав ставку не на удешевление производства и низкую цену, а на качество, удобство
                    и эстетичный внешний вид, мы уверены, что покупатели по достоинству оценят наши изделия. Девиз нашей
                    компании заложен в названии изделий – <b>«Эвернит» - всегда безупречен!</b></div>
                <h3>Высокое качество носков Эвернит</h3>
                <li className="h3">правильность размеров всех носков;</li>
                <li className="h3">края носков не закручиваются;</li>
                <li className="h3">двойная резинка;</li>
                <li className="h3">усиленная пятка и мысок;</li>
                <li className="h3">носки хорошо держатся при носке и не спадают;</li>
                <li className="h3">двухслойная структура создает комфорт;</li>
                <li className="h3">носки сохраняют свойства при стирке и сушке;</li>
                <li className="h3">носки сохраняют цвет при стирке;</li>
                <li className="h3">гладкий и плоский шов;</li>
                <li className="h3">носки соответствуют ГОСТу и санитарным нормам.</li>
                <h3>Высокое качество носков Эвернит обеспечивается</h3>
                <li className="h3">При производстве используется только гребенная хлопковая пряжа, то есть нить гладкая,
                    изделие гораздо меньше скатывается и дольше сохраняет новую поверхность.
                </li>
                <li className="h3">Хлопок только активного крашения, который практически не линяет и сохраняет
                    насыщенный цвет даже после многократных стирок.
                </li>
                <li className="h3">В качестве основы изделия используются не дешевые полиамид или полиэстер, а только
                    Эластан и Спандекс (аналоги волокна LYCRA), что значительно увеличивает долговечность изделия и
                    долгое время сохраняет форму при носке и стирке.
                </li>
                <li className="h3">Современное оборудование позволяет нам выпускать носки с двойной резинкой. Двойная
                    резинка, в которую вплетена натуральная латексная нить, обеспечивает гораздо более эластичный и
                    плотный охват ноги, нежели обычная одинарная. При этом она очень мягкая и не оставляет следов на
                    лодыжке даже при длительной носке.
                </li>
                <li className="h3">У носков «Эвернит» особо плоский надногтевой шов. Автоматический линкер последнего
                    поколения и особая технология вязки позволяют достичь высокой прочности при такой тонкости шва,
                    которая достигается лишь на ручных кетельных машинах. Это очень важная особенность, так как толстый
                    надногтевой шов очень часто повреждает кутикулы ногтей пальцев ног или «набивает» мозоли, особенно
                    когда носится тесная модельная обувь и вентиляция ног в обуви недостаточна.
                </li>
                <h3>Низкая цена</h3>
                <div className="h3">Расположение самого производства в г.Владивостоке позволяет полностью исключить из
                    себестоимости товара транспортную наценку.
                </div>
                <div className="h3">Кроме того, отсутствует цепочка посредников, неизбежная при закупке товара в других
                    регионах или странах. Вы закупаете товар напрямую у производителя, что значительно снижает цену
                    товара.
                </div>
            </div>
            <Basement/>
            <SideBar_right/>

        </div>
    );
}

export default Certificate;