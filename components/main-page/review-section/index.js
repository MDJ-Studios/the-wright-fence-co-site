import s from "./reviews.module.css";

import FacebookReview from "./ReviewCard";
import data from "./data";

export default function Reviews() {
    return (
        <section className={`${s.section_reviews} ${s.flex} ${s.flex_wrap}`}>
            <h2>What Our Customers Are Saying</h2>
            <div className={`${s.parent_container} ${s.flex}`}>
                {data.map(({ id, name, profile_photo, post, images, link}) => (
                    <div key={id} className={`${s.content_container} ${s.flex}`}>
                        <div className={`${s.content_text} ${s.flex}`}>
                            <FacebookReview name={name} profile_photo={profile_photo} post={post} images={images} link={link} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
