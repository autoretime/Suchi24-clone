import React from "react";
import "./style.css";

const NotFound = () => {
    return (
        <div className="container">
            <div className="error-page d-flex justify-content-center p-2">
                <img
                    src="https://24rolls.com.ua/wp-content/uploads/2022/01/404-min.png"
                    alt=""
                />
                <h1>Помилка!!!</h1>
                <p>
                    Можливо ви не вірно ввели адресу, або ця сторінка була
                    <br />
                    видаленa, чи її ніколи не існувало!
                </p>
                <a href="/" >На Головну</a>
            </div>
        </div>
    );
};

export default NotFound;
