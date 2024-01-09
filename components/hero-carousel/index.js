import React, { useState, useEffect } from "react";
import Image from "next/image";
import handleScroll from "@/utils/handleScroll";

import s from "./carousel.module.css";

export default function Carousel({ slides, simpleMode, heading, subheading, ctaText, ctaLink }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
    const prevSlide = () => setCurrent(current => (current === 0 ? slides.length - 1 : current - 1));

    useEffect(() => {
        if (!simpleMode) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [slides.length, simpleMode]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return <div>No slides available</div>; // Improved fallback UI
    }

    return (
        <div className={s.section_carousel}>
            {slides.map((slide, index) => (
                <div className={index === current ? s.slide_active : s.slide} key={slide.id || index}>
                    {index === current && (
                        <>
                            <Image src={slide.image} layout="fill" objectFit="cover" alt="carousel image" />
                            <div className={s.caption}>
                                <h2>{heading}</h2>
                                <p>{subheading}</p>
                                <button className={s.ctaButton} onClick={() => handleScroll(ctaLink)}>{ctaText}</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
