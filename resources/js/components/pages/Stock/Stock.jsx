import React from "react";
import "./stock.css";

const Stock = () => {
    return (
        <div className="container">
            <div className="Stock">
                <div className="stock-position">
                    <div className="img-block">
                        <img
                            src="https://24rolls.com.ua/wp-content/uploads/2022/01/promo-1024x433.jpg.webp"
                            alt=""
                        />
                    </div>

                    <div className="text-block">
                        <div className="d-flex align-items-center p-2 title">
                            <i className="far fa-dot-circle"></i>
                            <h2 className="px-2">Промокод это просто</h2>
                        </div>
                        <p>
                            Размещайте промокоды в соц сетях, на листовках,
                            передавайте с доставкой. тем самым вы привлечете или
                            вернете клиента к себе еще раз и еще раз.
                            <br /><br />
                            Промокод может быть как разовый на определенную
                            сумму – тем самым его можно использовать как
                            подарочный сертификат <br /><br />
                            Промокод на процент от суммы. <br /><br />
                            Или быть просто активным от определенной суммы{" "}
                            <br /><br />
                            Скидка в день рождение 10% <br /><br />
                        </p>

                        <h6 className="text-uppercase mb-2 font-weight-bold">
                            Follow us:
                        </h6>
                        <div className="col-md-3 col-lg-2 col-xl-2 mb-4 mt-2 d-flex">
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "##dd4b39" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-google"></i>
                            </a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#0082ca" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stock;
