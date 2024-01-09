import React, { Component } from "react";
import Slider from "react-slick";

import s from "./fenceCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class FenceCarousel extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            swipeToSlide: true,
            lazyLoad: "ondemand",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={s.customSlider}>
                <Slider {...settings}>
                    <div className={s.imageFillContainer}>
                        <img src="/images/board-on-board-with-top-cap-and-trim.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/board-on-board.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/chain-link.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/decks.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pipe-fence.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pre-stained-cedar.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pre-stained-cedar.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/side-by-side.png" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/wrought-iron.png" className={s.imageFill} alt="carousel image" />
                    </div>
                </Slider>
            </div>
        );
    }
}