import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import "./style.scss";

const Carousel = () => {
    return (
        <>
            <Splide
                aria-label="My Favorite Images"
                className="for-shadow"
                options={{
                    perPage: 1,
                    perMove: 1,
                    pagination: false,
                    rewind: true,
                    autoplay: true,
                }}
            >
                <SplideSlide className="discounts-body-test">
                    <div className="discounts-body-test__background">
                        <img
                            src="https://24rolls.com.ua/wp-content/uploads/2022/01/pizza31-min.jpg"
                            alt=""
                        />
                    </div>
                    <div className="discounts-body-test__text">
                        <div className="discounts-body-test__title">
                            {" "}
                            <h6>Піца 3+1 </h6>
                        </div>
                        <div className="discounts-body-test__description">
                            <p>
                                При замовленні 3х піц, 4ю Ви отримуєте в
                                подарунок
                            </p>
                        </div>
                        <button className="discounts-body-test__button">
                            <a href="">Детальніше</a>
                        </button>
                    </div>
                </SplideSlide>
                <SplideSlide className="discounts-body-test">
                    <div className="discounts-body-test__background">
                        <img
                            src="https://24rolls.com.ua/wp-content/uploads/2022/01/slide-2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="discounts-body-test__text">
                        <div className="discounts-body-test__title">
                            {" "}
                            <h5>
                                Доставимо замовлення за 1 годину або забери саме
                                через 30 хвилин!
                            </h5>{" "}
                        </div>
                        <div className="discounts-body-test__description">
                            При Самовивозі На все меню -15%
                        </div>
                        <button className="discounts-body-test__button">
                            <a href="">Детальніше</a>
                        </button>
                    </div>
                </SplideSlide>
            </Splide>
        </>
    );
};

export default Carousel;
