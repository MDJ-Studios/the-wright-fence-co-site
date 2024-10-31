import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handleScroll from "@/utils/handleScroll";

import React, { useState, useEffect, Component } from "react";
import Image from "next/image";

import s from "./carousel.module.css";

export default class HeroCarousel extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            fade: true,
            swipeToSlide: true,
            initialSlide: 0,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={s.section_carousel}>
                <div className={s.caption}>
                    <h2>
                        Crafting More Than Fences <br />
                        We Build Lasting Connections
                    </h2>
                    <p>Secure Your Space with a Touch of Family Warmth and Craftsmanship</p>
                    <button className={s.ctaButton} onClick={() => handleScroll("services")}>
                        Learn More
                    </button>
                </div>
                <Slider {...settings}>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c1.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c2.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/carousel_images/c3.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                </Slider>
            </div>
        );
    }
}
