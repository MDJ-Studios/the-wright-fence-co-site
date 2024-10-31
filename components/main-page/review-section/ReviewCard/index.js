import React from 'react';
import s from './ReviewCard.module.css';

export default function FacebookReview({
    name,
    profile_photo,
    post,
    images,
    link
}) {
    return (
        <a href={link} target="_blank">
            <div className={s.reviewContainer}>
                <div className={s.header}>
                    <div className={s.userInfo}>
                        <img src={profile_photo} alt={name} className={s.profileImage} />
                        <span className={s.userName}>{name}</span>
                    </div>
                    <span className={s.fbIcon}>
                        <img src="/images/the_wright_fence_co_reviews/fb-logo.png" alt="Facebook logo" />
                    </span>
                </div>

                {/* Review text */}
                <p className={s.reviewText}>
                    {post}
                </p>

                {/* Review images */}
                <div className={s.imageContainer}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`${name} review image`} className={s.reviewImage} />
                    ))}
                </div>
            </div>
        </a>
    );
}
