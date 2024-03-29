import s from "./reviews.module.css";

export default function Reviews() {
    return (
        <section className={`${s.section_reviews} ${s.flex} `}>
            {/* parent container */}
            <h2>What Our Customers Are Saying</h2>
            <div className={`${s.parent_container}`}>
                {/* container 1 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frobertfeil09%2Fposts%2Fpfbid0FrjkNzDPFu6jc9xDYTMRgRxZ3e5zhAU5LMAJWBqM2A7cf759uvMTPHk96thxgGMWl&show_text=true&width=auto"
                            width="100%"
                            height="600"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    {/* title */}
                </div>
                {/* container 2 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshelly.yocham.5%2Fposts%2Fpfbid036p6CSvfkWM8k85dNmLwUPdMHTgmtGtzQG8foc6zZTw8ahB6kyc4AY739QWzQycKFl&show_text=true&width=auto"
                            width="100%"
                            height="600"
                            style={{ border: "none", overflow: "hidden" }}
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
                {/* container 3 */}

                {/* text */}
                <div className={`${s.content_container} ${s.flex}`}>
                    <div className={`${s.content_text} ${s.flex}`}>
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0h9RsSpJdGH29wXUMQHF5yt1RmwnhCS8jEWDALYtQoKq4huUKCPhn31e7eQg6Ka7kl%26id%3D1729232065&show_text=true&width=auto"
                            width="100%"
                            height="600"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
