import Image from "next/image";
import s from "./service.module.css";

const services = [
    {
        id: 1,
        title: "Fences",
        description: "A fence is a boundary structure crafted from materials like wood, metal, or vinyl, designed to enclose and define outdoor spaces. It serves both practical and aesthetic purposes, offering privacy, security, and a distinctive look to your property.",
        imageUrl: "/images/carousel_images/c3.png",
    },
    {
        id: 2,
        title: "Staining",
        description: "Staining is a protective and decorative process where a colored solution is applied to wood surfaces, such as fences or decks. It enhances the wood's appearance, providing a rich tone while safeguarding it from elements like UV rays and moisture, ultimately prolonging the lifespan of the structure.",
        imageUrl: "/images/carousel_images/c2.png",
    },
    {
        id: 3,
        title: "Decks",
        description: "A deck is an elevated outdoor platform, often attached to a house, designed for various activities. It serves as an extension of your living space, providing a versatile area for relaxation, social gatherings, and enjoying the outdoors in a comfortable and elevated setting.",
        imageUrl: "/images/decks.png",
    },
    { 
        id: 3,
        title: "Patio Covers",
        description: "A patio cover is a stylish extension to your outdoor living space, providing shade and protection from the elements. Whether it's a pergola, awning, or roofed structure, a patio cover transforms your patio into a comfortable retreat, ideal for relaxing, dining, and enjoying the outdoors in any weather.",
        imageUrl: "/images/services-patio-covers.jpg",
    },
];


export default function ServiceOffering() {
    return (
        <section className={s.section_services} id="services">
            <h2>Services We Offer</h2>
            <div className={s.services_container}>
                {services.map((service) => (
                    <div key={service.id} className={s.service_item}>
                        <div className={s.service_image}>
                            <Image 
                                src={service.imageUrl} 
                                alt={`Service: ${service.title}`} 
                                objectFit="cover"
                                width={250} 
                                height={250}
                            />
                        </div>
                        <div className={s.service_description}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
