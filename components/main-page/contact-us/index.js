import React, { useState, useEffect } from "react";
import s from "./contact.module.css";


const MyMap = () => {
    useEffect(() => {
        const initMap = () => {
            const latLng = { lat: 32.8223651463173, lng: -97.41485800430719 };
            
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7.8,
                center: latLng,
            });

            new google.maps.Circle({
                strokeColor: '#632ed4',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#632ed4',
                fillOpacity: 0.55,
                map,
                center: latLng,
                radius: 80467, 
            });

            new google.maps.Marker({
                position: latLng,
                map,
            });
        };

        if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtWCsngNdsOQIduF7xkjn8v4p7CSXmV6s&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        }
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};


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
                    <MyMap />
                    {/* <h3>Service Area Map</h3> */}
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
