import React from "react";
import "./header.css";

const MainSidebar = () => {
    return (
        <div className="header d-f j-c-c p-6 a-i-c">
            <ul className="d-f a-i-c j-c-s-a">
                <li>
                    {" "}
                    <a className="home" href="/">
                        Головна
                    </a>{" "}
                </li>
                <li>
                    {" "}
                    <a className="home" href="/delivery">
                        Доставка
                    </a>{" "}
                </li>
                <li>
                    {" "}
                    <a className="home" href="/pay">
                        Як оплачувати
                    </a>{" "}
                </li>
                <li>
                    {" "}
                    <a className="home" href="/stock">
                        Акції
                    </a>{" "}
                </li>
                <li>
                    {" "}
                    <a className="home" href="/about">
                        Про нас
                    </a>{" "}
                </li>
            </ul>
        </div>
    );
};

export default MainSidebar;
