import React, { useState } from "react";
import s from "./contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
    };

    return (
        <section className={`${s.section_contact}`}>
            <h2>Contact Us</h2>
            <div className={`${s.div_parent}`}>
                <div className={s.map_parent}>
                    <h1>MAP</h1>
                </div>
                <div className={s.form_parent}>
                    <form onSubmit={handleSubmit} className={s.form_ele}>
                        <div className={s.name_parent}>
                            <input
                                className={s.full}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Wick"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={s.email_parent}>
                            <input
                                className={s.full}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="babayaga@email.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={s.message_parent}>
                            <textarea
                                className={s.full}
                                id="message"
                                name="message"
                                placeholder="Why did you have to kill my dog (⌣̩̩́_⌣̩̩̀)"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={s.submit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
