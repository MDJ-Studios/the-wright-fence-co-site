import Image from "next/image";

export default function ServiceOffering() {
    return (
        <section className="section-service flex flex-wrap">
            {/* parent container */}
            <div className="parent-container flex">
                {/* container 1 */}
                <div className="content-container flex ">
                    {/* image */}
                    <div className="content-image">
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className="content-text flex">
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                    {/* title */}
                </div>
                {/* container 2 */}
                <div className="content-container flex ">
                    {/* image */}
                    <div className="content-image">
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className="content-text flex">
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                </div>
                {/* container 3 */}
                <div className="content-container flex ">
                    {/* image */}
                    <div className="content-image">
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className="content-text flex">
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
