import React, { useState } from "react";
import s from "./contact.module.css";

export default function Contact() {
    
    const getResetFormData = () => ({
        name: "",
        email: "",
        message: "",
    });

    const [formData, setFormData] = useState(getResetFormData());
    const [formSubmitted, setFormSubmitted] = useState(false);

    const encode = ({name, email, message}) => {
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formData)
        })
        
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);

        setFormData(getResetFormData());
    };

    return (
        <section className={`${s.section_contact}`} id="contact">
            <h2>Contact Us</h2>
            <div className={`${s.div_parent}`}>
                <div className={s.map_parent}>
                    <iframe 
                        title="location" 
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtWCsngNdsOQIduF7xkjn8v4p7CSXmV6s&q=fort+worth+tx" 
                        width="100%" 
                        height="375" 
                        style={{ padding: 0, margin: 0, borderTop: '1px solid #808080', border: 0 }} 
                        loading="lazy" 
                    />
                </div>
                <div className={s.form_parent}>
                    {!formSubmitted ? (
                        <form 
                            onSubmit={handleSubmit} 
                            className={s.form_ele} 
                            data-netlify="true"
                            name="contact"
                        >
                            <input 
                                type="hidden" 
                                name="form-name" 
                                value="contact" 
                            />
                            <div className={s.name_parent}>
                                <input
                                    className={s.full}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Mr. Smith"
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
                                    placeholder="m.smith@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className={s.message_parent}>
                                <textarea
                                    className={s.full}
                                    id="message"
                                    name="message"
                                    placeholder="Hi there, I'm interested in a quote for a new fence."
                                    value={formData.message}
                                    onChange={handleChange}
                                    />
                            </div>
                            <button type="submit" className={s.submit}>
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div>
                            <h3>Thank you for your submission!</h3>
                            <p>We will get back to you as soon as possible.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


// export async function getStaticProps() {
//     const message = `This page has been pre-rendered using getStaticProps!
//     We needed to do this so that Netlify can pre-render the page at build time and see the contact form`;
//     // Leaving this here for now until we can find a more effiecient way to do this. 
//     return {
//       props: {
//         message,
//       },
//     };
//   }