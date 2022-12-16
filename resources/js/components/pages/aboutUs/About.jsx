import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="image-block d-flex">
                <img
                    src="https://24rolls.com.ua/wp-content/uploads/2022/10/o-nas.jpg"
                    alt="delivery"
                />
            </div>

            <div className="sec-block p-5">
                <div className="icon-block">
                    <img
                        src="https://24rolls.com.ua/wp-content/uploads/2022/01/credit.svg"
                        alt=""
                    />
                </div>

                <div className="text-block-three">
                    <div className="txt-two">
                        <h4>
                            24rolls Лудшая недорогая доставка суши в Запорожье и
                            Днепре 24/7
                        </h4>
                        <p >
                            24Rolls бесплатная доставка Суши Вок 24/7 –
                            бесплатно, быстро, а главное вовремя доставит домой
                            или офис ароматные, сытные и что не мало важно
                            недорогие Суши Сеты, Маки, Тэмаки, Гунканы,
                            Хосомаки, Футомаки, Урамаки, Сашими, Горячие и
                            Запеченные Роллы. У для любителей хорошо
                            подкрепится, людей занимающихся фитнесом – те кто
                            соблюдает ПП, предпочитают заказывать такие рыбные
                            блюда как: Низкокалорийные, Вегетарианские, с
                            высоким содержанием белка. Минздрав предупреждает:
                            обед должен быть самым сытным из всех приемов пищи,
                            обязательно с наличием горячего. У нас самое
                            разнообразное меню.
                        </p>
                    </div>
                    <p className='three'>
                        *Доставка суши по Днепру – БЕСПЛАТНО, минимальная сумма
                        заказа 299 грн. обычное время доставки 45…90 минут.{" "}
                        <br />
                        *Уточнить минимальный заказ и зону доставки вы можете у
                        оператора. <br />
                        *Скидки и акции не суммируются с другими скидками и
                        акциями. <br />
                        *График работы: Прием заявок с 9.00-21.00
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
