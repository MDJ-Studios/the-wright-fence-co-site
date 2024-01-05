import Image from "next/image";
import s from "./fences.module.css";

export default function SectionFenceTypes() {
    return (
        <section className={s.section_fence} id="gallery">
            <h2>Fence Types We Offer</h2>
            {/* parent div */}
            <div className={`${s.parent_div} ${s.flex_center}`}>
                {/* fence type 1 */}
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Side by Side</h3>
                        <p>
                            A classic cedar privacy fence provides an elegant and natural boundary for your outdoor space. 
                            Constructed with durable western red cedar wood, 
                            this side-by-side design offers both functionality and aesthetic appeal, 
                            ensuring privacy while enhancing the overall charm of your property.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/side-by-side.png" fill={true} style={{ objectFit: "cover" }} alt="fence 1 image" />
                    </div>
                </div>

                {/* fence type 2 */}
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Board on Board</h3>
                        <p>
                            A Western Red Cedar privacy fence, 
                            built with overlapping boards, 
                            offers both durability and a touch of natural beauty. 
                            Blocking all view from nosey neighbors, 
                            It's a sturdy and attractive way to create a private oasis in your outdoor area.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/board-on-board.png" fill={true} style={{ objectFit: "cover" }} alt="fence 2 image" />
                    </div>
                </div>

                {/* fence type 3 */}
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Board on Board with Top Cap and Trim</h3>
                        <p>
                            A Western Red Cedar board-on-board fence with top cap and trim is the epitome of both strength and style. 
                            The overlapping cedar boards, 
                            crowned with a protective top cap and neatly trimmed, 
                            create a robust yet sophisticated privacy barrier for your outdoor space.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/board-on-board-with-top-cap-and-trim.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Wrought Iron</h3>
                        <p>
                            A wrought iron fence is a timeless and elegant choice for both security and aesthetic appeal. 
                            Its intricate, durable design adds a touch of sophistication to any property while providing a strong and open boundary.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/wrought-iron.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Pre-Stained Cedar</h3>
                        <p>
                            A pre-stained cedar fence brings together the natural beauty of cedar with the convenience of a pre-applied stain. 
                            This not only enhances the wood's durability but also ensures a consistent and appealing finish. 
                            The result is a ready-to-go cedar fence that combines aesthetics and protection for your outdoor space.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/pre-stained-cedar.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Pipe Fence</h3>
                        <p>
                             A pipe fence featuring "no climb" wire is a tough and secure option. 
                             With a sturdy pipe structure and specialized wire to deter climbing, 
                             it's a reliable choice for creating a strong barrier that ensures both durability and safety.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/pipe-fence.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Chain Link</h3>
                        <p>
                            A chain-link fence is a practical and cost-effective solution for securing your property. 
                            Composed of interwoven metal links, it provides transparency while offering a straightforward and durable boundary for various spaces.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/chain-link.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
                <div className={`${s.flex_center} ${s.flex_wrap} ${s.content}`}>
                    {/* title + p and left side */}
                    <div className={s.content_text}>
                        <h3>Decks</h3>
                        <p>
                            A deck is an inviting outdoor platform, 
                            typically attached to a house, designed for relaxation and socializing. 
                            It extends your living space, providing an ideal spot for activities like dining, 
                            entertaining, or simply enjoying the outdoors in a comfortable and elevated setting.
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className={s.content_image}>
                        <Image src="/images/decks.png" fill={true} alt="fence 3 image" />
                    </div>
                </div>
            </div>
        </section>
    );
}
