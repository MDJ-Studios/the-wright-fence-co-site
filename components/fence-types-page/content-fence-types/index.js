import Image from "next/image";
import s from "./fences.module.css";

export default function SectionFenceTypes() {
    const fenceData = [
        {
            title: "Side by Side",
            description:
                "A classic cedar privacy fence provides an elegant and natural boundary for your outdoor space. Constructed with durable western red cedar wood, this side-by-side design offers both functionality and aesthetic appeal, ensuring privacy while enhancing the overall charm of your property.",
            imageSrc: "/images/side-by-side.jpg",
        },
        {
            title: "Board on Board",
            description:
                "A Western Red Cedar privacy fence, built with overlapping boards, offers both durability and a touch of natural beauty. Blocking all view from nosey neighbors, It's a sturdy and attractive way to create a private oasis in your outdoor area.",
            imageSrc: "/images/board-on-board.jpg",
        },
        {
            title: "Board on Board with Top Cap and Trim",
            description:
                "A Western Red Cedar board-on-board fence with top cap and trim is the epitome of both strength and style. The overlapping cedar boards, crowned with a protective top cap and neatly trimmed, create a robust yet sophisticated privacy barrier for your outdoor space.",
            imageSrc: "/images/board-on-board-with-top-cap-and-trim.jpg",
        },
        {
            title: "Wrought Iron",
            description:
                "A wrought iron fence is a timeless and elegant choice for both security and aesthetic appeal. Its intricate, durable design adds a touch of sophistication to any property while providing a strong and open boundary.",
            imageSrc: "/images/wrought-iron.jpg",
        },
        {
            title: "Pre-Stained Cedar",
            description:
                "A pre-stained cedar fence brings together the natural beauty of cedar with the convenience of a pre-applied stain. This not only enhances the wood's durability but also ensures a consistent and appealing finish. The result is a ready-to-go cedar fence that combines aesthetics and protection for your outdoor space.",
            imageSrc: "/images/pre-stained-cedar.jpg",
        },
        {
            title: "Pipe Fence",
            description:
                'A pipe fence featuring "no climb" wire is a tough and secure option. With a sturdy pipe structure and specialized wire to deter climbing, it\'s a reliable choice for creating a strong barrier that ensures both durability and safety.',
            imageSrc: "/images/pipe-fence.jpg",
        },
        {
            title: "Chain Link",
            description:
                "A chain-link fence is a practical and cost-effective solution for securing your property. Composed of interwoven metal links, it provides transparency while offering a straightforward and durable boundary for various spaces.",
            imageSrc: "/images/chain-link.jpg",
        },
        // Removing decks per the clients request.
        // {
        //     title: "Decks",
        //     description: "A deck is an inviting outdoor platform, typically attached to a house, designed for relaxation and socializing. It extends your living space, providing an ideal spot for activities like dining, entertaining, or simply enjoying the outdoors in a comfortable and elevated setting.",
        //     imageSrc: "/images/decks.jpg",
        // },
    ];

    return (
        <section className={s.section_fence} id="gallery">
            <h2>Fence Types We Offer</h2>
            <div className={`${s.parent_div} ${s.flex_center}`}>
                {fenceData.map((fence, index) => (
                    <div key={index} className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                        <div className={s.content_text}>
                            <h3>{fence.title}</h3>
                            <p>{fence.description}</p>
                        </div>
                        <div className={s.content_image}>
                            <Image
                                src={fence.imageSrc}
                                fill={true}
                                style={{ objectFit: "cover" }}
                                alt={`fence image ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
