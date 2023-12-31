import React, { useState, useEffect } from "react";
import Image from "next/image";
import handleScroll from "@/utils/handleScroll";

import s from "./carousel.module.css";

export default function Carousel({ slides, simpleMode }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    useEffect(() => {
        if (simpleMode !== 1) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [current, slides.length, simpleMode]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={s.section_carousel}>
            {slides.map((slide, index) => (
                <div className={index === current ? s.slide_active : s.slide} key={index}>
                    {index === current && (
                        <>
                            <Image src={slide.image} layout="fill" objectFit="cover" alt="carousel image" />
                            <div className={s.caption}>
                                <h2> Crafting More Than Fences, <br />We Build Lasting Connections</h2> {/* Heading */}
                                <p>Secure Your Space with a Touch of Family Warmth and Craftsmanship</p> {/* Subheading */}
                                <button className={s.ctaButton} onClick={() => handleScroll("services")}>Learn More</button> {/* CTA Button */}
                            </div>
                        </>
                    )}
                </div>
            ))}

            {simpleMode !== 1 && (
                <div className={s.button_parent}>
                    <button className={s.button} onClick={prevSlide}>
                        <Image src="/images/prev.png" width={20} height={20} alt="Previous" />
                    </button>
                    <button className={s.button} onClick={nextSlide}>
                        <Image src="/images/next.png" width={20} height={20} alt="Next" />
                    </button>
                </div>
            )}
        </div>
    );
}
