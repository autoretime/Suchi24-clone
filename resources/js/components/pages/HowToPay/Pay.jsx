import React from 'react';

const Pay = () => {
    return (
        <div className="container">
            <div className="image-block d-flex">
                <img
                    src="https://24rolls.com.ua/wp-content/uploads/2022/10/oplata.jpg"
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

                <div className="text-block-two">
                    <div className='txt'>
                        <h2>Оплата замовлення</h2>
                        Оплата кредитною карткою онлайн
                        <br /> 
                        Оплата здійснюється при отриманні замовлення кур’єром <br />
                        Оплату можна зробити переказом на карту ( докладніше
                        можна уточнити у менеджера )<br />
                    </div>
                    <p className='under-text'>
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

export default Pay;
