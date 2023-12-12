import s from "./about.module.css";

export default function AboutUs() {
    return (
        <section className={`${s.section_parent} ${s.flex}`}>
            <div className={s.parent_div}>
                <h2>About Us</h2>
                <p className={s.about_desc}>
                    God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates
                    Dinosaurs. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? What do they got
                    in there? King Kong? God help us, we're in the hands of engineers.
                </p>
            </div>
        </section>
    );
}
