import React, { Component } from "react";
import Slider from "react-slick";

import s from "./fenceCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handleScroll from "@/utils/handleScroll";

export default class FenceCarousel extends Component {
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
                    <h2>Elevate Your Space with Elegant Boundaries</h2>
                    <p>Discover the Perfect Blend of Privacy, Style, and Durability</p>
                    <button className={s.ctaButton} onClick={() => handleScroll("gallery")}>
                        See Available Fence Types
                    </button>
                </div>
                <Slider {...settings}>
                    <div className={s.imageFillContainer}>
                        <img
                            src="/images/board-on-board-with-top-cap-and-trim.jpg"
                            className={s.imageFill}
                            alt="carousel image"
                        />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/board-on-board.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/chain-link.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/decks.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pipe-fence.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pre-stained-cedar.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/pre-stained-cedar.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/side-by-side.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                    <div className={s.imageFillContainer}>
                        <img src="/images/wrought-iron.jpg" className={s.imageFill} alt="carousel image" />
                    </div>
                </Slider>
            </div>
        );
    }
}

/* <CustomCarousel
slides={slides}
simpleMode={0}
heading="Elevate Your Space with Elegant Boundaries"
subheading="Discover the Perfect Blend of Privacy, Style, and Durability"
ctaText="See Available Fence Types"
ctaLink="gallery"
/> */
