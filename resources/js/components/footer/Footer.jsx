import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <section>
                <footer className=" footer text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 logo-footer">
                                <div className="d-f ">
                                    <img src="https://24rolls.com.ua/wp-content/uploads/2022/10/logo-1-300x139.png.webp" />
                                </div>

                                <p>
                                    *Доставка суши по Днепру – БЕСПЛАТНО,
                                    минимальная сумма заказа 299 грн. обычное
                                    время доставки 45…90 минут. *Уточнить
                                    минимальный заказ и зону доставки вы можете
                                    у оператора. *Скидки и акции не суммируются
                                    с другими скидками и акциями. *График
                                    работы: Прием заявок с 9.00-21.00
                                </p>
                            </div>

                            <div className=" second-block col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5>Соц. тенета</h5>

                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    href="https://www.facebook.com/"
                                    role="button"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    href="https://twitter.com/?lang=ru"
                                    role="button"
                                    target="_blank"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    href="https://www.instagram.com/"
                                    role="button"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                            <div className=" third-block col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="">Контакт</h5>

                                <p>
                                    <i className="fas fa-map-marker-alt text-secondary"></i>{" "}
                                    г.Днепр, ул.Степана Бандеры, 49
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>

                                    <span>
                                        <a href="mailto:zp24rolls@gmail.com">
                                            zp24rolls@gmail.com
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3 text-secondary"></i>{" "}
                                    <span>
                                        <a href="tel:+380985604424">
                                            (098)560-44-24
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between copyright p-6">
                        <div>Політика конфіденційності</div>
                        <div>( © ). Всі права захищені2022 | 24 ROLLS</div>
                        <div>Сайт розроблений: A</div>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default Footer;
