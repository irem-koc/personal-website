import React, { useContext, useRef, useState } from "react";
import "./../styles/Contact.css";
import { MouseContext } from "../context/mouse-context";
import emailjs from '@emailjs/browser';
// import ExamplePdf from "./../pdf/IremKocCV.pdf";
const Contact = () => {
    const { setCursor } = useContext(MouseContext);
    const [name, setName] = useState("");
    const form = useRef();
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !mail || !message) {
            setIsAlertVisible(true);
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
        }
        console.log(name, mail, message);
        setName("");
        setMail("");
        setMessage("");
        emailjs.sendForm('service_zau6pzj', 'template_4kfjmt5', form.current, 'yvwE0TUb1fcqRImzY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact" id="contact">
            <div className="contact_inner">
                <div className="author-message">
                    <div className="wrapper">
                        <div className="let">- LET'S CONNECT</div>
                        <div>
                            <h1 className="get-in">Get in touch</h1>
                        </div>
                        <div className="current">
                            I'm currently avaliable to take on new projects, so
                            feel free to send me a message about anything that
                            you want to run past me. You can contact anytime at
                            24/7
                        </div>
                        <ul className="contact-list">
                            <li>
                                <a
                                    onMouseEnter={toggleCursor}
                                    onMouseLeave={toggleCursor}
                                    className="tel"
                                    href="tel:+905539753691"
                                >
                                    +90 553 975 3691
                                </a>
                            </li>
                            <li>
                                <a
                                    onMouseEnter={toggleCursor}
                                    onMouseLeave={toggleCursor}
                                    className="mail"
                                    href="mailto:kociremx@gmail.com"
                                >
                                    kociremx@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    onMouseEnter={toggleCursor}
                                    onMouseLeave={toggleCursor}
                                    className="adres"
                                    href="#home"
                                >
                                    Beylikduzu, Istanbul
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form ref={form} onSubmit={handleSubmit} className="message-area">
                        {isAlertVisible && (
                            <div className="alert-container">
                                <div className="alert-inner">
                                    Please Fill Required Fields
                                </div>
                            </div>
                        )}
                        <input name="user_name"
                            formNoValidate="formNoValidate"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Enter your name"
                        />
                        <input name="user_email"
                            formNoValidate="formNoValidate"
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            type="email"
                            placeholder="Your email"
                        />
                        <textarea name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            cols="37"
                            rows="3"
                            placeholder="Write something..."
                        ></textarea>
                        <button type="submit">Submit now</button>
                    </form>
                </div>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770815.1869053458!2d28.35278722508894!3d41.00344271660253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1693596902277!5m2!1str!2str"
                        width="80%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginwwidth="0"
                        
                        alignself= 'center'
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
            </div>
        </div>
    );
};

export default Contact;
