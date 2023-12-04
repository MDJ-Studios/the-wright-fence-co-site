import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, [current, slides.length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="section-carousel">
            {slides.map((slide, index) => (
                <div className={index === current ? "slide active" : "slide"} key={index}>
                    {index === current && (
                        <Image src={slide.image} fill={true} style={{ objectFit: "cover" }} alt="carousel image" />
                    )}
                </div>
            ))}
            <div className="button-parent">
                <button className="button " onClick={prevSlide}>
                    <Image src="/images/prev.png" width={20} height={20} alt="carousel image" />
                </button>
                <button className="button " onClick={nextSlide}>
                    <Image src="/images/next.png" width={20} height={20} alt="carousel image" />
                </button>
            </div>
        </div>
    );
}
