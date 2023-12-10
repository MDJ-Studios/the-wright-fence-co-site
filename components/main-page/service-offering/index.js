import Image from "next/image";
import s from "./service.module.css";

export default function ServiceOffering() {
    return (
        <section className={`${s.section_service} ${s.flex} ${s.flex_wrap}`} id="services">
            {/* parent container */}
            <div className={`${s.parent_container} ${s.flex}`}>
                {/* container 1 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                    {/* title */}
                </div>
                {/* container 2 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                </div>
                {/* container 3 */}
                <div className={`${s.content_container} ${s.flex}`}>
                    {/* image */}
                    <div className={s.content_image}>
                        <Image src="/images/640.png" fill={true} style={{ objectFit: "cover" }} alt="service image" />
                    </div>
                    {/* text */}
                    <div className={`${s.content_text} ${s.flex}`}>
                        <h2>Service Offering</h2>
                        {/* description */}
                        <p>So you two dig up, dig up dinosaurs? Must go faster. Must go faster.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
