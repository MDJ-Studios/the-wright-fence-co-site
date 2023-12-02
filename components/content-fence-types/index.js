import Image from "next/image";

export default function SectionFenceTypes() {
    return (
        <section className="section-fence">
            <h2>Fence Types We Offer</h2>
            {/* parent div */}
            <div className="parent-div flex-center">
                {/* fence type 1 */}
                <div className="flex-center flex-wrap content">
                    {/* title + p and left side */}
                    <div className="content-text-box">
                        <h3>Fence Type #1</h3>
                        <p>
                            Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I gave it a
                            cold? I gave it a virus. A computer virus. They're using our own satellites against us. And
                            the clock is ticking. My dad once told me, laugh and the world laughs with you, Cry, and
                            I'll give you something to cry about you little bastard!
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className="content-image">
                        <Image src="/images/640.png" layout="fill" objectFit="cover" alt="fence 1 image" />
                    </div>
                </div>

                {/* fence type 2 */}
                <div className="flex-center flex-wrap content">
                    {/* title + p and left side */}
                    <div className="content-text-box">
                        <h3>Fence Type #2</h3>
                        <p>
                            Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I gave it a
                            cold? I gave it a virus. A computer virus. They're using our own satellites against us. And
                            the clock is ticking. My dad once told me, laugh and the world laughs with you, Cry, and
                            I'll give you something to cry about you little bastard!
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className="content-image">
                        <Image src="/images/640.png" layout="fill" objectFit="cover" alt="fence 2 image" />
                    </div>
                </div>

                {/* fence type 3 */}
                <div className="flex-center flex-wrap content">
                    {/* title + p and left side */}
                    <div className="content-text-box">
                        <h3>Fence Type #3</h3>
                        <p>
                            Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I gave it a
                            cold? I gave it a virus. A computer virus. They're using our own satellites against us. And
                            the clock is ticking. My dad once told me, laugh and the world laughs with you, Cry, and
                            I'll give you something to cry about you little bastard!
                        </p>
                    </div>
                    {/* content image and right side */}
                    <div className="content-image">
                        <Image src="/images/640.png" layout="fill" objectFit="cover" alt="fence 3 image" />
                    </div>
                </div>
            </div>
        </section>
    );
}
