import React, { useContext, useRef, useState } from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false);
    const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;

    const darkMode = false;

    const handleSubmit = (e) =>{
        e.preventDefault();
    } 

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">Let's discuss your project</div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 12342 48596
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            contact@gmail.com 
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            43/2 Main Road, Backsvilla 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem ipsum dolor sit.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, possimus.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thanks..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
