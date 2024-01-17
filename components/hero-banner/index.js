import Image from "next/image";
import handleScroll from "@/utils/handleScroll";

import s from "./heroBanner.module.css";

export default function HeroBanner({ image, heading, subheading, ctaText, ctaLink}) {

    return (
        <div className={s.section_banner}>
            <div>
                <Image 
                    src={image} 
                    layout="fill" 
                    objectFit="cover" 
                    alt="carousel image"
                    priority
                />
                <div className={s.caption}>
                    <h2>{heading}</h2>
                    <p>{subheading}</p>
                    <button className={s.ctaButton} onClick={() => handleScroll(ctaLink)}>{ctaText}</button>
                </div>
            </div>
        </div>
    );
}
