import s from "./reviews.module.css";

export default function Reviews() {
    return (
        <section className={`${s.section_reviews} ${s.flex} ${s.flex_wrap}`}>
            {/* parent container */}
            <h2>What our customers are saying about us</h2>
            <div className={`${s.parent_container} ${s.flex}`}>
                {/* container 1 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h3>Review 1</h3>
                        {/* description */}
                        <p>
                            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                            creates Dinosaurs. My dad once told me, laugh and the world laughs with you, Cry, and I'll
                            give you something to cry about you little bastard!
                        </p>
                    </div>
                    {/* title */}
                </div>
                {/* container 2 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h3>Review 2</h3>
                        {/* description */}
                        <p>
                            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                            creates Dinosaurs. My dad once told me, laugh and the world laughs with you, Cry, and I'll
                            give you something to cry about you little bastard!
                        </p>
                    </div>
                </div>
                {/* container 3 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h3>Review 3</h3>
                        {/* description */}
                        <p>
                            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                            creates Dinosaurs. My dad once told me, laugh and the world laughs with you, Cry, and I'll
                            give you something to cry about you little bastard!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
