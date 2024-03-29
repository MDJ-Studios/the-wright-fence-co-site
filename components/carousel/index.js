import React, { useState, useEffect, Component } from "react";
import Image from "next/image";

import s from "./carousel.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={s.next_button_parent}>
            <button className={s.button} style={{ ...style, display: "block" }} onClick={onClick}>
                <Image src="/images/next.png" width={20} height={20} alt="Next Button" />
            </button>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={s.prev_button_parent}>
            <button className={s.button} style={{ ...style, display: "block" }} onClick={onClick}>
                <Image src="/images/prev.png" width={20} height={20} alt="Previous Button" />
            </button>
        </div>
    );
}

export default class CustomSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            swipeToSlide: true,
            lazyLoad: "ondemand",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        return (
            <div className={s.customSlider}>
                <Slider {...settings}>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c1.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c2.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img
                            src="/images/carousel_images/c3.jpg"
                            className={s.imageFill}
                            alt="carousel image"
                            priority={true}
                        />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c4.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                </Slider>
            </div>
        );
    }
}
