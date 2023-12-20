import s from "./about.module.css";

export default function AboutUs() {
    return (
        <section className={`${s.section_parent} ${s.flex}`}>
            <div className={s.parent_div}>
                <h2>About Us</h2>
                <p className={s.about_desc}>
                    Hello, I'm Cole Wright, the driving force behind The Wright Fence Company. As a family-centric business, we go beyond being just a fencing company—we're your partners in securing lasting peace of mind. 
                    Our commitment revolves around more than just the craftsmanship of fences; it's about cultivating enduring relationships with each client. We take pride in the smiles our work brings and the lasting impressions we leave. 
                    Outside the world of fencing, you'll find me savoring moments with my wife, Olivia, and our bundle of joy, Madison. 
                    When I'm not meticulously ensuring the security of your spaces, I'm on the hockey rink, feeding my passion for the game, or casting a line, embracing the peacefulness of fishing.
                    At The Wright Fence Company, it's not just about barriers; it's about building connections that withstand the test of time. 
                    Let us be your trusted partner in creating a secure and aesthetically pleasing environment for your property.
                    Looking forward to the opportunity of serving you,

                    Cole Wright
                </p>
            </div>
        </section>
    );
}
