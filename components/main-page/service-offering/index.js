import Image from "next/image";
import s from "./service.module.css";

export default function ServiceOffering() {
    return (
        <section className={`${s.section_service} ${s.flex}`} id="services">
            {/* parent container */}
            <h2>Services We Offer</h2>
            <div className={`${s.parent_container} ${s.flex}`}>
                {/* container 1 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/services-fences.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Fences</h2>
                        {/* description */}
                        <p>
                            A fence is a boundary structure crafted from materials like wood, metal, or vinyl, designed
                            to enclose and define outdoor spaces. It serves both practical and aesthetic purposes,
                            offering privacy, security, and a distinctive look to your property.
                        </p>
                    </div>
                    {/* title */}
                </div>
                {/* container 2 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/services-decks.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Decks</h2>
                        {/* description */}
                        <p>
                            A deck is an elevated outdoor platform, often attached to a house, designed for various
                            activities. It serves as an extension of your living space, providing a versatile area for
                            relaxation, social gatherings, and enjoying the outdoors in a comfortable and elevated
                            setting.
                        </p>
                    </div>
                </div>
                {/* container 3 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/services-patio-covers.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Patio covers</h2>
                        {/* description */}
                        <p>
                            A patio cover is a stylish extension to your outdoor living space, providing shade and
                            protection from the elements. Whether it's a pergola, awning, or roofed structure, a patio
                            cover transforms your patio into a comfortable retreat, ideal for relaxing, dining, and
                            enjoying the outdoors in any weather.
                        </p>
                    </div>
                </div>
                {/* container 4 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/services-staining.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Staining</h2>
                        {/* description */}
                        <p>
                            Staining is a protective and decorative process where a colored solution is applied to wood
                            surfaces, such as fences or decks. It enhances the wood's appearance, providing a rich tone
                            while safeguarding it from elements like UV rays and moisture, ultimately prolonging the
                            lifespan of the structure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
